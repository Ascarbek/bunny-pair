import express from 'express';
import { createValidator } from 'express-joi-validation';

const router = express.Router();
const validator = createValidator();

export const authDisabled: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
}[] = [];

/*
import newUser, { newUserSchema } from './handlers/user-put';
router.put('/user', validator.body(newUserSchema), newUser);
authDisabled.push({
  method: 'PUT',
  path: '/user',
});

import updateUser, { updateUserSchema } from './handlers/user-post';
router.post('/user', validator.body(updateUserSchema), updateUser);

import getGood, { getGoodSchema } from './handlers/good-get';
router.get('/good', validator.query(getGoodSchema), getGood);

import authUser, { authUserSchema } from './handlers/user-auth';
router.post('/user-auth', validator.body(authUserSchema), authUser);
authDisabled.push({
  method: 'POST',
  path: '/user-auth',
});

import checkToken, { checkTokenSchema } from './handlers/user-check-token';
router.post('/check-token', validator.body(checkTokenSchema), checkToken);
authDisabled.push({
  method: 'POST',
  path: '/check-token',
});

import uploadGoodsImageHandler from './handlers/uploadGoodsImageHandler';
router.put('/upload-goods-image', uploadGoodsImageHandler);
*/

import getPairAddress , { getPairAddressSchema } from './handlers/pair-address';
router.get('/pair-address', validator.query(getPairAddressSchema), getPairAddress);


export default router;
