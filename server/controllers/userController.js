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

import SessionModel from '../models/sessionModel.js';

const userController = {};

userController.updateLogFilter = async (req, res, next) => {
  try {
    /* get cookie from user */
    const { session } = req.cookies;

    /* look for that cookie in database */
    const currSession = await SessionModel.findOne({ _id: session });

    /* if cookie doesn't exist, set cookieStatus to false for navigation use in front-end, and vice versa */
    if (!currSession) {
      res.locals.cookieStatus = false;
    } else {
      res.locals.cookieStatus = true;
    }

    return next();
  } catch (err) {
    return next({
      log: `An error has occured in sessionController.checkCookie. ERROR - ${err}`,
      status: 400,
      message: { err: 'An error occured' },
    });
  }
};

userController.deleteLogFilter = async (req, res, next) => {
  try {
    /* get cookie from user */
    const { session } = req.cookies;

    /* look for that cookie in database */
    const currSession = await SessionModel.findOne({ _id: session });

    /* if cookie doesn't exist, set cookieStatus to false for navigation use in front-end, and vice versa */
    if (!currSession) {
      res.locals.cookieStatus = false;
    } else {
      res.locals.cookieStatus = true;
    }

    return next();
  } catch (err) {
    return next({
      log: `An error has occured in sessionController.checkCookie. ERROR - ${err}`,
      status: 400,
      message: { err: 'An error occured' },
    });
  }
};

export default userController;