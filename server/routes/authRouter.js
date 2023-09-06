import express from 'express';
import cookieParser from 'cookie-parser';
import authController from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.get(
  '/', 
  (req, res, next) => {
    console.log('inside authRouter');
    return next();
  },
  authController.verifyPassword, 
  authController.setCookie,
  (req, res) => {
    res.sendStatus(200);
  }
);

export default authRouter;