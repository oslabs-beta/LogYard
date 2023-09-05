import express from 'express';
import cookieParser from 'cookie-parser';
import authController from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.get(
  '/', 
  // authController.verifyPassword, 
  // authController.checkCookie,
  (req, res) => {
    res.sendStatus(200);
  }
);

export default authRouter;