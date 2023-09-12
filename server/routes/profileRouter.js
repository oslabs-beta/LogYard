/**
 * ************************************
 *
 * @module  authRouter
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description Used on changing user info
 * 
 * ************************************
 **/

import express from 'express';
import cookieParser from 'cookie-parser';
import authController from '../controllers/authController.js';
import sessionController from '../controllers/sessionController.js';

const profileRouter = express.Router();

profileRouter.post(
  '/',
  (req, res) => {

    res.sendStatus(200);
  }
);// Creates or updates a filter

profileRouter.delete(
  '/',
  (req, res) => {

    res.sendStatus(200);
  }
);// Deletes the requested filter

export default profileRouter;