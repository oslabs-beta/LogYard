import LogModel from '../../models/logModel.js';

const deleteLog = async (req, res, next) => {
  try {
    const idToDelete = req.params.id;
    const deletedLog = await LogModel.findOneAndDelete({_id: idToDelete});
    res.locals.deleted = deletedLog;
    next();
  } catch (err) {
    return next({
      log: `logController.deleteLog: ERROR - ${err}`,
      status: err.status || 500,
      message: {
        err: 'Error occured in logController.deleteLog. Check server logs for more details.',
      },
    });
  }
};

export default deleteLog;
