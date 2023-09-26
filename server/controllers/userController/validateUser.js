/**
 * ************************************
 *
 * @module  updateLogFilter
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description Checks request cookies for valid username and password. Throws an error if invalid.
 *
 * ************************************
 **/

import SessionModel from '../../models/sessionModel.js';
import UserModel from '../../models/userModel.js';

const validateUser = async (req, res, next) => {
  try {
    const { logyard_session } = req.cookies;

    const sessionData = await SessionModel.findOne({ _id: logyard_session });
    console.log('sessionData: ', sessionData);
    const { username } = sessionData;
    
    const userData = await UserModel.findOne({ username });
    console.log('userData: ', userData);
    if (!userData) {
      return next({
        log: 'userController.validateUser ERROR: User Validation Error',
        status: 500,
        message: {
          err: 'Error with User Validation',
        },
      });
    }

    res.locals.userData = userData;
    return next();
  } catch (e) {
    return next({
      log: `userController.validateUser ERROR: ${e}`,
      status: 500,
      message: {
        err: 'Error with User Validation',
      },
    });
  }
};

export default validateUser;
