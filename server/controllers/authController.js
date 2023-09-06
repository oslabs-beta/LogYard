/**
 * ************************************
 *
 * @module  authController
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .verifyPassword checks if password in .env matches one entered by user on login
 * 
 * ************************************
 */

import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import LogModel from '../models/logModel.js';

const authController = {};

authController.verifyPassword = async (req, res, next) => {

  // console.log('entered authController.verifyPassword');

  try {
    /* get password from query */
    const { password } = req.query;

    // console.log('password: ', password);
    // console.log('process.env.VITE_USER_PASSWORD: ', process.env.VITE_USER_PASSWORD);

    /* check if password typed by user matches .env password - if so, proceed.*/
    if (password === process.env.VITE_USER_PASSWORD) {
      return next();
    } else {
      /* if incorrect, pass to global error handler */
      return next({
        log: 'Password is incorrect',
        status: 401,
        message: {
          err: 'Try again',
        },
      });
    }
  } catch (err) {
    return next({
      log: `authController.verifyPassword ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error with cookie',
      },
    });
  }
};

export default authController;