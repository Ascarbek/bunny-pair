import db from '../db';
import { ContainerTypes, ValidatedRequest, ValidatedRequestSchema } from 'express-joi-validation';
import Joi from 'joi';
import { ethers } from 'ethers';
import uniRouter from '../ABI/uniRouter';
import factoryABI from '../ABI/factory';
import LPToken from '../ABI/LPToken';
import { BigNumber } from 'ethers';
import { BASE, null_address } from '../helpers/constants';
import getProvider from '../helpers/getProvider';
import tokenInfo from '../helpers/getTokenInfo';

interface GetTokenInfoRequest {
  token: string;
  chain: number;
}

export const getTokenInfoSchema = Joi.object({
  token: Joi.string().required(),
  chain: Joi.number().required(),
});

interface GetTokenInfoSchema extends ValidatedRequestSchema {
  [ContainerTypes.Query]: GetTokenInfoRequest;
}

const getTokenInfo = async (req: ValidatedRequest<GetTokenInfoSchema>, res: any) => {
  const { token, chain } = req.query;

  const result = await tokenInfo(chain, token);

  res.json(result);
};

export default getTokenInfo;
