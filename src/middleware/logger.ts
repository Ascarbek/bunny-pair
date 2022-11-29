import type { RequestHandler } from 'express';
import dayjs from 'dayjs';

const logger: RequestHandler<any, any, any, any> = async (req, res, next) => {
  console.log(`${dayjs().format()}: ${req.method} ${req.path}`);
  next();
};

export default logger;
