/**
 * ************************************
 *
 * @module  logController
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .getLogs gets all logs from the database
 * 
 * ************************************
 */

import LogModel from '../models/logModel.js';

const logController = {};

logController.getLogs = async (req, res, next) => {
  
  // console.log('inside of logController.getLogs middleware');

  try {
    /* check if cookie status is true on locals - if so, fetch all logs from database*/
    if (res.locals.cookieStatus) {
      const data = await LogModel.find({});
      res.locals.logs = data;
      return next();
    }
  } catch (err) {
    return next({
      log: `logController.getLogs: ERROR - ${err}`,
      status: err.status || 500,
      message: {
        err: 'Error occured in logController.getLogs. Check server logs for more details.',
      },
    });
  }
};

export default logController;
