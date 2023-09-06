import LogModel from '../models/logModel.js';

const logController = {};

logController.getLogs = async (req, res, next) => {
  console.log('inside of logController.getLogs middleware');
  try {
    if (res.locals.cookieStatus) {
      const data = await LogModel.find({});
      console.log('data: ', data);
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
