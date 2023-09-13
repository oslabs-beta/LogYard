import express from 'express';
import cookieParser from 'cookie-parser';
import connectDB from './db.js';
import expressLogger from 'logger-express';
const { addLogger, createLog, addContext } = expressLogger;
import logger from 'logger';

import logRouter from './routes/logRouter.js';
import authRouter from './routes/authRouter.js';

/* connect to mongo database */
connectDB();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* Routers */
app.use('/logs', addLogger('router', 'logs'), addContext('server', '0'), logRouter);
app.use('/auth', addLogger('router', 'auth'), addContext('server', '0'), authRouter);

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
  logger.silly('ServerStarted', {Context: {
    'server': '0'
  }});
  console.log(`Server is running on port ${port}`);
});

export default app;
