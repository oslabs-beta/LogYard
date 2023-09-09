/**
 * ************************************
 *
 * @module  authRouter
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description Used on login - checks if password is correct and sets a cookie
 * 
 * ************************************
 **/

import express from 'express';
import cookieParser from 'cookie-parser';
import authController from '../controllers/authController.js';
import sessionController from '../controllers/sessionController.js';

const authRouter = express.Router();

authRouter.get(
  '/', 
  authController.verifyPassword, 
  sessionController.setCookie,
  (req, res) => {
    res.sendStatus(200);
  }
);

export default authRouter;