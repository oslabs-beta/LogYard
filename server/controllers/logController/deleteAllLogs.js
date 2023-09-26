import LogModel from '../../models/logModel.js';

const deleteAllLogs = async (req, res, next) => {
  try {
    // delete all logs from database
    await LogModel.deleteMany({});

    console.log('deleted all logs in db.');

    next();
  } catch (err) {
    return next({
      log: `logController.deleteAllLogs: ERROR - ${err}`,
      status: err.status || 500,
      message: {
        err: 'Error occured in logController.deleteAllLogs. Check server logs for more details.',
      },
    });
  }
};

export default deleteAllLogs;
