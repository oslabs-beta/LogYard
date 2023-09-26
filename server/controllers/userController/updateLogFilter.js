/**
 * ************************************
 *
 * @module  updateLogFilter
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description Uses locals.userdata and filter data in req.body to create a user filter.
 *
 * ************************************
 **/

import UserModel from '../../models/userModel.js';

const updateLogFilter = async (req, res, next) => {
  try {
    const { username } = res.locals.userData;
    const { filterName, filterString } = req.body;

    res.locals.userData = await UserModel.findOneAndUpdate(
      { username },
      { $set: { [`savedFilters.${filterName}`]: filterString } },
      {
        upsert: true,
        returnOriginal: false,
      }
    );

    return next();
  } catch (e) {
    return next({});
  }
};

export default updateLogFilter;