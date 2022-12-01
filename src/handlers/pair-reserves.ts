import { ContainerTypes, ValidatedRequest, ValidatedRequestSchema } from 'express-joi-validation';
import Joi from 'joi';
import pairReserves from '../helpers/getPairReserves';

interface GetPairReservesRequest {
  token0: string;
  token1: string;
  chain_id: number;
}

export const getPairReservesSchema = Joi.object({
  token0: Joi.string().required(),
  token1: Joi.string().required(),
  chain_id: Joi.number().required(),
});

interface GetPairReservesSchema extends ValidatedRequestSchema {
  [ContainerTypes.Query]: GetPairReservesRequest;
}

const getPairReserves = async (req: ValidatedRequest<GetPairReservesSchema>, res: any) => {
  const { token0, token1, chain_id } = req.query;

  const result = await pairReserves(chain_id, token0, token1);

  res.json(result);
};

export default getPairReserves;
