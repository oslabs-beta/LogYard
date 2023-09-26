import UserModel from '../../models/userModel.js';
import bcrypt from 'bcrypt';

const validateUser = async (req, res, next) => {
  try {
    const { username, password } = req.cookies;

    const userData = await UserModel.findOne({ username });

    const cryptResult = await bcrypt.compare(password, userData.password);

    if (!cryptResult) {
      return next({
        log: 'userController.validateUser ERROR: incorect password',
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