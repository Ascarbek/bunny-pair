import db from '../db';
import getProvider from './getProvider';
import { BigNumber, ethers } from 'ethers';
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

  let result: IPairReserves[] = [];

  for (const routerData of routers) {
    const routerAddress = routerData.address;

    try {
      const router = new ethers.Contract(routerAddress, uniRouter, provider);
      const factoryAddress = await router.factory();
      const factory = new ethers.Contract(factoryAddress, factoryABI, provider);

      let wrappedNative = await router.WETH();
      const wToken0 = token0 === BASE ? wrappedNative : token0;
      const wToken1 = token1 === BASE ? wrappedNative : token1;

      const pairAddress = await factory.getPair(wToken0, wToken1);

      if (pairAddress === null_address) {
        continue;
      }

      const pair = new ethers.Contract(pairAddress, LPToken, provider);

      const pairToken0 = await pair.token0();
      const pairToken1 = await pair.token1();
      const inOrder =
        pairToken0.toLowerCase() === wToken0.toLowerCase() && pairToken1.toLowerCase() === wToken1.toLowerCase();

      const reserves = await pair.getReserves();
      const reserve0 = BigNumber.from(reserves._reserve0._hex).toString();
      const reserve1 = BigNumber.from(reserves._reserve1._hex).toString();
      const supply = BigNumber.from((await pair.totalSupply())._hex).toString();

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
    } catch (e) {
      // mute
    }
  }
  return result;
};

export default getPairReserves;
