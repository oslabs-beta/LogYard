/**
 * ************************************
 *
 * @module  createUser
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description creates a new user given a password and username in request body. 
 * throws an error when already in use.
 *
 * ************************************
 **/

import UserModel from '../../models/userModel.js';
import bcrypt from 'bcrypt';

const createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const encrypted = bcrypt.hashSync(password, bcrypt.genSaltSync());

    const result = await UserModel.create({
      username,
      password: encrypted,
    });

    res.locals.userData = result;

    return next();
  } catch (e) {
    return next({
      log: `userController.createUser ERROR: ${e}`,
      status: e.status || 500,
      message: {
        err: 'Error with User Creation',
      },
    });
  }
};

export default createUser;