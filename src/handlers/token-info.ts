import { ContainerTypes, ValidatedRequest, ValidatedRequestSchema } from 'express-joi-validation';
import Joi from 'joi';
import tokenInfo from '../helpers/getTokenInfoOnChain';

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
