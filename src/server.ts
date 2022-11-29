import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import upload from 'express-fileupload';
import dotenv from 'dotenv';
import router from './routes';
import auth from './middleware/auth';
import logger from './middleware/logger';

dotenv.config();

const port: number = parseInt(process.env.PORT || '') || 8050;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(upload());
app.use(logger);
app.use(auth);
app.use(router);

app.listen(port, '127.0.0.1', () => {
  console.log(`bunny-pairs backend is listening on port ${port}`);
});
