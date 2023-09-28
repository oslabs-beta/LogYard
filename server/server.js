import express from 'express';
import cookieParser from 'cookie-parser';
import connectDB from './db.js';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import logRouter from './routes/logRouter.js';
import authRouter from './routes/authRouter.js';
import profileRouter from './routes/profileRouter.js';



/* connect to mongo database */
connectDB();

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(join(__dirname, '../dist')));

/* Routers */
app.use('/api/logs', logRouter);
app.use('/api/auth', authRouter);
app.use('/api/profile', profileRouter);

app.use('/', (req, res, next) => {
  res.sendFile(join(__dirname, '../dist/index.html'));
});

/* 404 handler */
app.use('*', (req, res) => {
  console.log('global 404 handler');
  res.status(404).send('Not found.');
});

/* Global error handler */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errObj = Object.assign(defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

/* Port initialization */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
