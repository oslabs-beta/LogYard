import express from 'express';
import cookieParser from 'cookie-parser';
import connectDB from './db.js';
import logger from './Logger.js';
// import cors from 'cors';

import logRouter from './routes/logRouter.js';
import authRouter from './routes/authRouter.js';

connectDB();

const app = express();
const port = 3000;

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routers here
app.use('/logs', logRouter);
app.use('/auth', authRouter);

app.use('*', (req, res) => {
  console.log('global 404 handler');
  res.status(404).send('Not found.');
});

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


app.listen(port, () => {
  
  // logger.error('Test Error', {
  //   Context1: 'This is context1',
  //   Context2: 'This is context2'
  // });

  console.log(`Server is running on port ${port}`);
});

export default app;
