/**
 * ************************************
 *
 * @module  sessionController
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description (.checkCookie checks if cookie is present in database) (.setCookie sets a cookie on the database and in the browser)
 *
 * ************************************
 **/

import SessionModel from '../models/sessionModel.js';

const sessionController = {};

sessionController.checkCookie = async (req, res, next) => {
  try {
    const { session } = req.cookies;

    const currSession = await SessionModel.findOne({ _id: session });

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

sessionController.setCookie = async (req, res, next) => {
  try {
    const response = await SessionModel.create({});

    const id = response._id;

    res.cookie('session', `${id}`, { httpOnly: true });

    return next();
  } catch (err) {
    return next({
      log: `An error has occured in sessionController.setCookie. ERROR - ${err}`,
      status: 400,
      message: { err: 'An error occured' },
    });
  }
};

export default sessionController;
