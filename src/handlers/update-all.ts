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

  const result: IPairReserves[] = await allReserves(chain_id, limit, offset);

  for (let i = 0; i < result.length; i++) {
    const row = result[i];

    const testRows = await db('reserve_supply').where({
      chain_id: row.chain_id,
      router: row.router,
      token0wrapped: row.token0wrapped,
      token1wrapped: row.token1wrapped,
    });

    if (testRows.length) {
      await db('reserve_supply')
        .where({
          chain_id: row.chain_id,
          router: row.router,
          token0wrapped: row.token0wrapped,
          token1wrapped: row.token1wrapped,
        })
        .delete();
    }

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

  res.json({ totalRows: result });
};

export default getAllReserves;
