import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import LogModel from '../models/logModel.js';

const authController = {};

// VERIFYS IF THE PASSWORD IN .env MATCHES ONE ENTERED BY USER ON LOGIN
authController.verifyPassword = async (req, res, next) => {
  console.log('entered authController.verifyPassword');
  try {
    const { password } = req.query;

    // console.log('password: ', password);
    // console.log('process.env.VITE_USER_PASSWORD: ', process.env.VITE_USER_PASSWORD);

    if (password === process.env.VITE_USER_PASSWORD) {
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