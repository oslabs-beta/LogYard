import SessionModel from '../models/sessionModel.js';

const sessionController = {};

// CHECKS IF COOKIE IS PRESENT IN DATABASE
sessionController.checkCookie = async (req, res, next) => {
  try {
    const { session } = req.cookies;
    console.log('session:', session);

    // look for session in database
    const currSession = await SessionModel.findOne({ cookieId: session });

    // if cookie doesnt exist, set cookieStatus to false
    if (!currSession) {
      console.log('no cookie found');
      res.locals.cookieStatus = false;
    } else {
      res.locals.cookieStatus = true;  
      console.log('cookie found');
      return next();
    }
  } catch (err) {
    return next({
      log: 'An error has occured in sessionController.checkCookie', 
      status: 400,
      message: { err: 'An error occured' },
    });
  }
};

// SETS A COOKIE ON THE DATABASE AND BROWSER
sessionController.setCookie = async (req, res, next) => {
  try {
    const cookie = Math.floor(Math.random() * 100).toString();
    console.log('cookie:', cookie);

    res.cookie('session', cookie, { httpOnly: true });

    const response = await SessionModel.create({ cookieId: cookie });
    console.log('response: ', response);
    
    return next();
  } catch (err) {
    return next({
      log: 'An error has occured in sessionController.setCookie', 
      status: 400,
      message: { err: 'An error occured' },
    });
  }
};


// sessionController.checkCookie = async (req, res, next) => {
//   console.log('inside of authController.checkCookie');
//   try {
//     // logic here for checking if cookie exists...
//     const { session } = req.cookies;
//     console.log('session cookie: ', session);
  
//     if (session === 'value') {
//       res.locals.cookieStatus = true;
//       return next();
//     } else {
//       res.locals.cookieStatus = false;
//       // res.redirect('/'); // not sure if this is working through postman
//     }
//   } catch (err) {
//     return next({
//       log: `authController.checkCookie ERROR: ${err}`,
//       status: 400,
//       message: {
//         err: 'Error while finding cookie',
//       },
//     });
//   }
// };

export default sessionController;