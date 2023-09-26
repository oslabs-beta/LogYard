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
import authController from '../controllers/authController.js';
import sessionController from '../controllers/sessionController.js';

const authRouter = express.Router();

authRouter.post(
  '/', 
  authController.verifyPassword, 
  sessionController.setCookie,
  (req, res) => {

    // res.locals.logger.log('info', 'Successful Auth');
    
    res.sendStatus(200);
  }
);

export default authRouter;