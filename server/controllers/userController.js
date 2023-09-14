/**
 * ************************************
 *
 * @module  sessionController
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description Allows control of user data
 *
 * ************************************
 **/

import UserModel from '../models/userModel.js';

const userController = {};

userController.createUser = async (req, res, next) => {
  try{
    const {username, password} = req.body;
    
    const result = await UserModel.create({
      username,
      password,
    });

    res.locals.userData = result;
    
    return next();
  }
  catch (e) {
    return next({
      log: `userController.createUser ERROR: ${e}`,
      status: e.status || 500,
      message: {
        err: 'Error with User Creation',
      },
    });
  }
};

userController.signin = async (req, res, next) => {
  try{
    const {username, password} = req.body;
    
    const result = await UserModel.findOne({ username , password});
    
    res.locals.userData = result;
    
    return next();
  }
  catch (e) {
    return next({
      log: `userController.signin ERROR: ${e}`,
      status: e.status || 500,
      message: {
        err: 'Error with User Sign In',
      },
    });
  }
};

userController.addToken = async (req, res, next)=>{
  try {
    const {username, password} = res.locals.userData;

    res.cookie('username', username);
    res.cookie('password', password);
    
    return next();
  }
  catch (e){
    return next({log: `userController.addToken ERROR: ${e}`,
      status: e.status || 500,
      message: {
        err: 'Error with Token Creation',
      },
    });
  }
};

userController.validateUser = async (req, res, next) => {
  try{
    const { username, password } = req.cookies;

    res.locals.userData = await UserModel.findOne({ username, password });//Compare passwords using bcrypt
    
    return next();
  }
  catch (e) {
    return next({
      log: `userController.validateUser ERROR: ${e}`,
      status: e.status || 500,
      message: {
        err: 'Error with User Creation',
      },
    });
  }
};

userController.updateLogFilter = async (req, res, next) => {
  try{
    const { username } = res.locals.userData;
    const { filterName, filterString} = req.body;

    res.locals.userData = await UserModel.findOneAndUpdate(
      { username }, 
      { $set: { [`savedFilters.${filterName}`]: filterString } },
      { 
        upsert: true,
        returnOriginal: false
      },
    );

    return next();
  }
  catch (e) {
    return next({});
  }
};

userController.deleteLogFilter = async (req, res, next) => {
  try{
    const { username } = res.locals.userData;
    const { filterName } = req.body;

    res.locals.userData = await UserModel.findOneAndUpdate(
      { username }, 
      { $unset: { [`savedFilters.${filterName}`]: '' } },
      {
        returnOriginal: false
      }
    );
    
    return next();
  }
  catch (e) {
    return next({
      log: `userController.deleteLogFilter ERROR: ${e}`,
      status: e.status || 500,
      message: {
        err: 'Error with Delete Log',
      },
    });
  }
};

export default userController;