import express from 'express';
import { pinoHttp } from 'pino-http';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(pinoHttp());
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

export { app };