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

const getAllReserves: (chain_id: number, limit: number, offset: number) => Promise<IPairReserves[]> = async (
  chain_id,
  limit,
  offset
) => {
  const routers = await db('router').where('chain_id', chain_id);
  const allTokens = await db('token').where('chain_id', chain_id).orderBy('id').limit(limit).offset(offset);

  if (!allTokens.length) {
    return [];
  }

  const provider = getProvider(chain_id);
  const ethcallProvider = new Provider(provider);
  await ethcallProvider.init();

  const factoryWethCalls = [];

  for (let r = 0; r < routers.length; r++) {
    const routerData = routers[r];
    const routerAddress = routerData.address;
    const router = new Contract(routerAddress, uniRouter as any[]);
    factoryWethCalls.push(router.factory());
    factoryWethCalls.push(router.WETH());
  }

  const factoryWethResponses = await ethcallProvider.all(factoryWethCalls);

  const pairAddressCalls = [];
  for (let t = 0; t < allTokens.length; t++) {
    const token0 = 'eth';
    const token1 = allTokens[t].address;

    for (let r = 0; r < factoryWethResponses.length / 2; r++) {
      const factoryAddress = factoryWethResponses[r * 2];
      const wrappedNative = factoryWethResponses[r * 2 + 1];
      const factory = new Contract(factoryAddress, factoryABI as any[]);

      const wToken0 = token0 === BASE ? wrappedNative : token0;
      const wToken1 = token1 === BASE ? wrappedNative : token1;

      pairAddressCalls.push(factory.getPair(wToken0, wToken1));
    }
  }

  const pairAddressResponses = await ethcallProvider.all(pairAddressCalls);
  const reserveSupplyCalls = [];

  let allSkips = 0;
  for (let p = 0; p < pairAddressResponses.length; p++) {
    const pairAddress = pairAddressResponses[p];
    if (pairAddress === null_address) {
      allSkips++;
      continue;
    }

    const pair = new Contract(pairAddress, LPToken as any[]);

    reserveSupplyCalls.push(pair.token0());
    reserveSupplyCalls.push(pair.token1());
    reserveSupplyCalls.push(pair.getReserves());
    reserveSupplyCalls.push(pair.totalSupply());
  }

  const reserveSupplyResponses = await ethcallProvider.all(reserveSupplyCalls);

  let result: IPairReserves[] = [];
  let skip = 0;

  for (let t = 0; t < allTokens.length; t++) {
    const token0 = 'eth';
    const token1 = allTokens[t].address;

    for (let r = 0; r < routers.length; r++) {
      const pairAddress = pairAddressResponses[t * routers.length + r];
      if (pairAddress === null_address) {
        skip++;
        continue;
      }
      const k = r - skip;

      const routerAddress = routers[r].address;
      const factoryAddress = factoryWethResponses[r * 2];
      const wrappedNative = factoryWethResponses[r * 2 + 1];

      const wToken0 = token0 === BASE ? wrappedNative : token0;
      const wToken1 = token1 === BASE ? wrappedNative : token1;

      const pairToken0 = reserveSupplyResponses[t * routers.length * 4 + r * 4 - skip * 4];
      const pairToken1 = reserveSupplyResponses[t * routers.length * 4 + r * 4 + 1 - skip * 4];

      const inOrder =
        pairToken0.toLowerCase() === wToken0.toLowerCase() && pairToken1.toLowerCase() === wToken1.toLowerCase();

      const reservesRaw = reserveSupplyResponses[t * routers.length * 4 + r * 4 + 2 - skip * 4];
      const supplyRaw = reserveSupplyResponses[t * routers.length * 4 + r * 4 + 3 - skip * 4];

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
  }

  return result;
};

export default getAllReserves;
