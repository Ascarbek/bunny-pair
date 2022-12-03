import { ContainerTypes, ValidatedRequest, ValidatedRequestSchema } from 'express-joi-validation';
import Joi from 'joi';
import allReserves from '../helpers/getAllReserves';
import db from '../db';
import type { IPairReserves } from '../types/IPairReserves';

interface GetAllReservesRequest {
  chain_id: number;
  limit: number;
  offset: number;
}

export const getAllReservesSchema = Joi.object({
  chain_id: Joi.number().required(),
  limit: Joi.number().required(),
  offset: Joi.number().required(),
});

interface GetAllReservesSchema extends ValidatedRequestSchema {
  [ContainerTypes.Query]: GetAllReservesRequest;
}

const getAllReserves = async (req: ValidatedRequest<GetAllReservesSchema>, res: any) => {
  const { chain_id, limit, offset } = req.query;

  const chain: any = await db('chain').where('chain_id', chain_id).first();

  const coins = [{ address: 'eth' }, ...chain.stable_coins.items];
  let totalRows = 0;

  for (let c = 0; c < coins.length; c++) {
    const coin = coins[c];
    const results: IPairReserves[] = await allReserves(chain_id, coin.address, limit, offset);

    for (let i = 0; i < results.length; i++) {
      totalRows++;
      const row = results[i];

      await db('reserve_supply')
        .where({
          chain_id: row.chain_id,
          router: row.router,
          token0wrapped: row.token0wrapped,
          token1wrapped: row.token1wrapped,
        })
        .delete();

      await db('reserve_supply')
        .where({
          chain_id: row.chain_id,
          router: row.router,
          token0: row.token0,
          token1: row.token1,
        })
        .delete();

      await db('reserve_supply').insert({
        chain_id: row.chain_id,
        router: row.router,
        factory: row.factory,
        token0: row.token0,
        token1: row.token1,
        token0wrapped: row.token0wrapped,
        token1wrapped: row.token1wrapped,
        decimals0: row.decimals0,
        decimals1: row.decimals1,
        reserve0: row.reserve0,
        reserve1: row.reserve1,
        supply: row.supply,
      });
    }
  }

  res.json({ totalRows });
};

export default getAllReserves;
