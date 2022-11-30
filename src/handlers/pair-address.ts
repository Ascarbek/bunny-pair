import db from '../db';
import { ContainerTypes, ValidatedRequest, ValidatedRequestSchema } from 'express-joi-validation';
import Joi from 'joi';
import { ethers } from 'ethers';
import { Routers } from './Routers';
import uniRouter from '../ABI/uniRouter';
import factoryABI from '../ABI/factory';
import LPToken from '../ABI/LPToken';
import { BigNumber } from 'ethers';

interface GetPairAddressRequest {
  token0: string;
  token1: string;
}

export const getPairAddressSchema = Joi.object({
  token0: Joi.string().required(),
  token1: Joi.string().required(),
});

interface GetPairAddressSchema extends ValidatedRequestSchema {
  [ContainerTypes.Query]: GetPairAddressRequest;
}

const null_address = '0x0000000000000000000000000000000000000000';
const BASE = 'ETH';

const getPairAddress = async (req: ValidatedRequest<GetPairAddressSchema>, res: any) => {
  const { token0, token1 } = req.query;

  const routers = await db('router').where('chain_id', 56);
  const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed1.binance.org', 56);

  let result: { name: string; pairAddress: string }[] = [];

  for (const routerData of routers) {
    // if (routerData.id !== 27) continue;
    // console.log(routerData);
    const routerAddress = routerData.address;

    try {
      const router = new ethers.Contract(routerAddress, uniRouter, provider);
      const factoryAddress = await router.factory();
      const factory = new ethers.Contract(factoryAddress, factoryABI, provider);

      let wrappedNative = await router.WETH();
      const pairAddress = await factory.getPair(
        token0 === BASE ? wrappedNative : token0,
        token1 === BASE ? wrappedNative : token1
      );

      if (pairAddress === null_address) {
        continue;
      }

      const pair = new ethers.Contract(pairAddress, LPToken, provider);
      const resData = await pair.getReserves();
      console.log(resData._reserve0, resData._reserve1);
      console.log(BigNumber.from(resData._reserve0._hex).toString(), BigNumber.from(resData._reserve1._hex).toString());

      result.push({
        name: routerData.name,
        pairAddress,
      });
    } catch (e) {
      // mute
    }
  }

  res.json(result);
};

export default getPairAddress;
