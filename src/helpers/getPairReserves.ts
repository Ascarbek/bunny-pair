import db from '../db';
import getProvider from './getProvider';
import { BigNumber, ethers } from 'ethers';
import { Contract, Provider } from 'ethers-multicall';
import uniRouter from '../ABI/uniRouter';
import factoryABI from '../ABI/factory';
import { BASE, null_address } from './constants';
import LPToken from '../ABI/LPToken';
import getTokenInfoDb from './getTokenInfoDb';
import getTokenInfoOnChain from './getTokenInfoOnChain';
import type { IPairReserves } from '../types/IPairReserves';

const getPairReserves: (chain_id: number, token0: string, token1: string) => Promise<IPairReserves[]> = async (
  chain_id,
  token0,
  token1
) => {
  const routers = await db('router').where('chain_id', chain_id);
  const provider = getProvider(chain_id);
  const ethcallProvider = new Provider(provider);
  await ethcallProvider.init();

  const factoryWethCalls = [];

  for (const routerData of routers) {
    const routerAddress = routerData.address;
    const router = new Contract(routerAddress, uniRouter as any[]);
    factoryWethCalls.push(router.factory());
    factoryWethCalls.push(router.WETH());
  }

  const factoryWethResponses = await ethcallProvider.all(factoryWethCalls);

  const pairAddressCalls = [];

  for (let i = 0; i < factoryWethResponses.length / 2; i++) {
    const factoryAddress = factoryWethResponses[i * 2];
    const wrappedNative = factoryWethResponses[i * 2 + 1];

    const factory = new Contract(factoryAddress, factoryABI as any[]);

    const wToken0 = token0 === BASE ? wrappedNative : token0;
    const wToken1 = token1 === BASE ? wrappedNative : token1;

    pairAddressCalls.push(factory.getPair(wToken0, wToken1));
  }

  const pairAddressResponses = await ethcallProvider.all(pairAddressCalls);

  const reserveSupplyCalls = [];

  for (let i = 0; i < pairAddressResponses.length; i++) {
    const pairAddress = pairAddressResponses[i];
    if (pairAddress === null_address) continue;

    const pair = new Contract(pairAddress, LPToken as any[]);

    reserveSupplyCalls.push(pair.token0());
    reserveSupplyCalls.push(pair.token1());
    reserveSupplyCalls.push(pair.getReserves());
    reserveSupplyCalls.push(pair.totalSupply());
  }

  const reserveSupplyResponses = await ethcallProvider.all(reserveSupplyCalls);

  let result: IPairReserves[] = [];

  let skip = 0;

  for (let i = 0; i < routers.length; i++) {
    const pairAddress = pairAddressResponses[i];
    if (pairAddress === null_address) {
      skip++;
      continue;
    }
    const k = i - skip;

    const routerAddress = routers[i].address;
    const factoryAddress = factoryWethResponses[k * 2];
    const wrappedNative = factoryWethResponses[k * 2 + 1];

    const wToken0 = token0 === BASE ? wrappedNative : token0;
    const wToken1 = token1 === BASE ? wrappedNative : token1;

    const pairToken0 = reserveSupplyResponses[k * 4];
    const pairToken1 = reserveSupplyResponses[k * 4 + 1];
    const inOrder =
      pairToken0.toLowerCase() === wToken0.toLowerCase() && pairToken1.toLowerCase() === wToken1.toLowerCase();

    const reservesRaw = reserveSupplyResponses[k * 4 + 2];
    const supplyRaw = reserveSupplyResponses[k * 4 + 3];

    const supply = BigNumber.from(supplyRaw._hex).toString();
    const reserve0 = BigNumber.from(reservesRaw._reserve0._hex).toString();
    const reserve1 = BigNumber.from(reservesRaw._reserve1._hex).toString();

    const token0infoDb = await getTokenInfoDb(chain_id, pairToken0.toLowerCase());
    const token1infoDb = await getTokenInfoDb(chain_id, pairToken1.toLowerCase());

    let decimals0 = 0;
    let decimals1 = 0;

    if (!token0infoDb) {
      const token0infoChain = await getTokenInfoOnChain(chain_id, pairToken0);
      if (token0infoChain) {
        decimals0 = token0infoChain.decimals;
      }
    } else {
      decimals0 = token0infoDb.decimals;
    }

    if (!token1infoDb) {
      const token1infoChain = await getTokenInfoOnChain(chain_id, pairToken1);
      if (token1infoChain) {
        decimals1 = token1infoChain.decimals;
      }
    } else {
      decimals1 = token1infoDb.decimals;
    }

    result.push({
      chain_id: chain_id,
      router: routerAddress.toLowerCase(),
      factory: factoryAddress.toLowerCase(),
      token0: inOrder ? token0.toLowerCase() : token1.toLowerCase(),
      token1: inOrder ? token1.toLowerCase() : token0.toLowerCase(),
      token0wrapped: pairToken0.toLowerCase(),
      token1wrapped: pairToken1.toLowerCase(),
      decimals0,
      decimals1,
      reserve0,
      reserve1,
      supply,
    });
  }

  return result;
};

export default getPairReserves;
