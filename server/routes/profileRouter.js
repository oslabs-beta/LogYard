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
import userController from '../controllers/userController.js';
import sessionController from '../controllers/sessionController.js';
import authController from '../controllers/authController.js';

const profileRouter = express.Router();

//Inputs: req.body(username, password, server) password
//Outputs: success or not success
profileRouter.post(
  '/signup',
  authController.verifyPassword,
  userController.createUser,
  sessionController.setCookie,
  (req, res) => {
    res.status(200).send(res.locals.userData);
  }
);

//Inputs: req.body.username, password
//Outputs: all data associated with user
profileRouter.post(
  '/signin',
  userController.signin, 
  sessionController.setCookie,
  (req, res) => {
    res.status(200).send(res.locals.userData);
  }
);

//Inputs req.body(filterName, filterString), req.cookies(JWT)
//Outputs success or failure
profileRouter.post(
  '/filter',
  userController.validateUser,
  userController.updateLogFilter,
  (req, res) => {
    res.status(200).send(res.locals.userData);
  }
);// Creates or updates a filter

//Inputs req.body(filterName), req.cookies(JWT)
//Outputs success or failure
profileRouter.delete(
  '/filter',
  userController.validateUser,
  userController.deleteLogFilter,
  (req, res) => {
    res.status(200).send(res.locals.userData);
  }
);// Deletes the requested filter

export default profileRouter;