import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import db from '../db';
import { authDisabled } from '../routes';

const auth: RequestHandler<any, any, any, any> = async (req, res, next) => {
  let noAuth = false;
  if (authDisabled.filter((a) => a.method === req.method && a.path === req.path).length > 0) {
    noAuth = true;
  }

  if (!noAuth && req.method !== 'GET') {
    try {
      const authHeader = req.header('Authorization') || '';
      const bearer = authHeader.split(' ')[1];

      const payload: any = jwt.verify(bearer, process.env.JWT_SECRET || 'default');

      res.locals = { currentUser: payload.username };
    } catch (e) {
      return res.sendStatus(401);
    }
  }

  next();
};

export default auth;
