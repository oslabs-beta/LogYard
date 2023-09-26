import UserModel from '../../models/userModel.js';
import bcrypt from 'bcrypt';

const signin = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    let result = await UserModel.findOne({ username });

    if (!result) {
      result = { password: '' };
    }

    const cryptResult = await bcrypt.compare(password, result.password);

    if (!cryptResult) {
      return next({
        log: 'userController.signin ERROR: Incorrect or no password',
        status: 500,
        message: {
          err: 'Error with User Sign In',
        },
      });
    }

    res.locals.userData = result;

    return next();
  } catch (e) {
    return next({
      log: `userController.signin ERROR: ${e}`,
      status: 500,
      message: {
        err: 'Error with User Sign In',
      },
    });
  }
};

export default signin;