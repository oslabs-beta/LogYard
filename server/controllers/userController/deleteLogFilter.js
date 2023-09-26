import UserModel from '../../models/userModel.js';

const deleteLogFilter = async (req, res, next) => {
  try {
    const { username } = res.locals.userData;
    const { filterName } = req.body;

    res.locals.userData = await UserModel.findOneAndUpdate(
      { username },
      { $unset: { [`savedFilters.${filterName}`]: '' } },
      {
        returnOriginal: false,
      }
    );

    return next();
  } catch (e) {
    return next({
      log: `userController.deleteLogFilter ERROR: ${e}`,
      status: e.status || 500,
      message: {
        err: 'Error with Delete Log',
      },
    });
  }
};

export default deleteLogFilter;