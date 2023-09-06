import express from 'express';
import cookieParser from 'cookie-parser';
import authController from '../controllers/authController.js';
import sessionController from '../controllers/sessionController.js';

const authRouter = express.Router();

// use this upon login
authRouter.get(
  '/', 
  authController.verifyPassword, 
  sessionController.setCookie,
  (req, res) => {
    res.sendStatus(200);
  }
);

export default authRouter;