import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('*', (req, res) => {
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
  console.log(`Server is running on port ${port}`);
});
