/**
 * ************************************
 *
 * @module  authRouter
 * @description Used on login - checks if password is correct and sets a cookie
 * 
 * ************************************
 **/

import express from 'express';
import authController from '../controllers/authController.js';
import sessionController from '../controllers/sessionController.js';

const authRouter = express.Router();

authRouter.post(
  '/', 
  authController.verifyPassword, 
  sessionController.setCookie,
  (req, res) => {
    
    res.sendStatus(200);
  }
);

export default authRouter;