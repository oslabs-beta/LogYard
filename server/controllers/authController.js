import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import LogModel from '../models/logModel.js';

const authController = {};

authController.verifyPassword = async (req, res, next) => {
  // console.log('inside of authController.verifyPassword');
  try {
    const { password } = req.params;

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

authController.setCookie = async (req, res, next) => {
  // console.log('inside of authController.setCookie');
  try {
    res.cookie('id', res.locals.id, {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
      maxAge: 5 * 60 * 1000,
    });
    return next();
  } catch (err) {
    return next({
      log: `authController.setCookie ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error with cookie',
      },
    });
  }
};

authController.checkCookie = async (req, res, next) => {
  // console.log('inside of authController.checkCookie');
  try {
    // logic here for checking if cookie exists...

    return next();
  } catch (err) {
    return next({
      log: `authController.checkCookie ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error while finding cookie',
      },
    });
  }
};

export default authController;