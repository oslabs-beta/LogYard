/**
 * ************************************
 *
 * @module  addToken
 * @description Adds a token to user cookies. Used for user validation on future requests.
 *
 * ************************************
 **/

const addToken = async (req, res, next) => {
  try {
    const { username, password } = res.locals.userData;

    res.cookie('username', username);
    res.cookie('password', password);

    return next();
  } catch (e) {
    return next({
      log: `userController.addToken ERROR: ${e}`,
      status: e.status || 500,
      message: {
        err: 'Error with Token Creation',
      },
    });
  }
};

export default addToken;