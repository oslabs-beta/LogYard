/**
 * ************************************
 *
 * @module  deleteLogFilter
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description Deletes a user created filter. Requires the filter name in the request body.
 *
 * ************************************
 **/

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