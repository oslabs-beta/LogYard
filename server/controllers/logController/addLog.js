/**
 * ************************************
 *
 * @module  addLog
 * @description adds a log to the database
 *
 * ************************************
 **/

import LogModel from '../../models/logModel.js';

const addLog = async (req, res, next) => {
  try {
    const params = req.body;
    const data = await LogModel.create(params);
    next();
  } catch (err) {
    return next({
      log: `logController.addLog: ERROR - ${err}`,
      status: err.status || 500,
      message: {
        err: 'Error occured in logController.addLog. Check server logs for more details.',
      },
    });
  }
};

export default addLog;