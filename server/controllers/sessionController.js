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
    /* get cookie from user */
    const { session } = req.cookies;

    /* look for that cookie in database */ 
    const currSession = await SessionModel.findOne({ cookieId: session });

    /* if cookie doesn't exist, set cookieStatus to false for navigation use in front-end, and vice versa */ 
    if (!currSession) {
      console.log('no cookie found');
      res.locals.cookieStatus = false;
    } else {
      console.log('cookie found');
      res.locals.cookieStatus = true;  
    }

    return next();

  } catch (err) {
    return next({
      log: 'An error has occured in sessionController.checkCookie', 
      status: 400,
      message: { err: 'An error occured' },
    });
  }
};

sessionController.setCookie = async (req, res, next) => {
  try {
    /* generate random number for cookie value */ 
    const cookie = Math.floor(Math.random() * 10000).toString();
    // console.log('cookie:', cookie);

    /* create a cookie */ 
    res.cookie('session', cookie, { httpOnly: true });

    /* save info from that cookie onto the database */ 
    const response = await SessionModel.create({ cookieId: cookie });
    // console.log('response: ', response);
    
    return next();
  } catch (err) {
    return next({
      log: 'An error has occured in sessionController.setCookie', 
      status: 400,
      message: { err: 'An error occured' },
    });
  }
};

export default sessionController;