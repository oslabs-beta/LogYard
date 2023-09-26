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

import dotenv from 'dotenv';

dotenv.config();

const authController = {};

authController.verifyPassword = async (req, res, next) => {
  try {
    const { serverPassword } = req.body;

    if (serverPassword === process.env.VITE_USER_PASSWORD) {
      return next();
    } else {
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