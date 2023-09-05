import LogModel from '../models/logModel.js';

const logController = {};

logController.getLogs = async (req, res, next) => {
  console.log('inside of logController.getLogs middleware');
  try {
    // const data = await LogModel.create({
    //   LogString: 'This is the string',
    //   Context: 'This is context',
    //   Severity: 7,
    // });
		// console.log('data: ', data);

    // const logs = db.getCollection('logs');
    

    return next();
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
