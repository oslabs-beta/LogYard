import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import LogModel from '../models/logModel.js';

const authController = {};

authController.verifyPassword = async (req, res, next) => {
  console.log('inside of authController.verifyPassword');
  try {
    const { password } = req.query;

    console.log('password: ', password);
    console.log('process.env.VITE_USER_PASSWORD: ', process.env.VITE_USER_PASSWORD);

    if (password === process.env.VITE_USER_PASSWORD) {
      return next();
    } else {
      return next({
        log: 'Password is incorrect',
        status: 401,
        message: {
          err: 'Try again',
        },
      });
    }
  } catch (err) {
    return next({
      log: `authController.verifyPassword ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error with cookie',
      },
    });
  }
};

authController.setCookie = async (req, res, next) => {
  console.log('inside of authController.setCookie');
  try {
    res.cookie('session', 'value', {
      httpOnly: true,
      // maxAge: 5 * 60 * 1000,
    });
    return next();
  } catch (err) {
    return next({
      log: `authController.setCookie ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error with cookie',
      },
    });
  }
};

authController.checkCookie = async (req, res, next) => {
  console.log('inside of authController.checkCookie');
  try {
    // logic here for checking if cookie exists...
    const { session } = req.cookies;
    console.log('session cookie: ', session);

    if (session === 'value') {
      res.locals.cookieStatus = true;
      return next();
    } else {
      res.locals.cookieStatus = false;
      // res.redirect('/'); // not sure if this is working through postman
    }
  } catch (err) {
    return next({
      log: `authController.checkCookie ERROR: ${err}`,
      status: 400,
      message: {
        err: 'Error while finding cookie',
      },
    });
  }
};

export default authController;


// AUTH STORAGE: Stretch: Add to an env
// const accessTokenSecret = '24c9e42fcac060838120f07ea5460b4c6f8c4b7c137a23c4035a93c594f0b4dd1d932b0e95eeb0422066daa3e521c6353b4f858893a3b80343ab3271d7d79198';
// const refreshTokenSecret = '16376af783e470b0faf0eafafe36350ca5ec5fff9979bc34397906bfe2bfc53bbb030dc6cceb17285f56bd379ffef9251b3e993e5d6637a8e7c63e7acefe1f81';

// authController.hashedLogin = async function (req, res, next) {
//   const { username, password } = req.body;
//   try {
//        console.log('Hashed login successful');
//         res.locals.loginAttempt = 'Hashed login successful';
//         // JWT
//         const accessToken = jwt.sign(
//           {
//             "UserInfo": {
//               "username": user.username,
//               "roles": user.roles
//             }
//           },
//           accessTokenSecret,
//           { expiresIn: '180s'}
//         )

//         const refreshToken = jwt.sign(
//           {
//             "UserInfo": {
//               "username": user.username,
//               "roles": user.roles
//             }
//           },
//           refreshTokenSecret,
//           { expiresIn: '300s'}
//         )
//         res.cookie('jwt', refreshToken, {
//           httpOnly: true, // Only accessible by a web server
//           secure: true, //https
//           sameSite: 'None',
//           maxAge: 5 * 60 * 1000
//         })

//         res.locals.accessToken = accessToken;

//       } else {
//         console.log('Invalid password');
//         res.locals.loginAttempt = 'Invalid username or password';
//       }
//       return next();

// authController.refresh = async function (req, res, next) {
//   const { username, password } = req.body;
//   const cookies = req.cookies;

//   if (!cookies.jwt) return res.status(401).json({message:' JWT not provided, has expired, or is missing'});

//   const refreshToken = cookies.jwt;
//   console.log('refreshToken:', refreshToken);

//   try {
//     console.log('Issuing refresh token')
//     const decoded = jwt.verify(refreshToken, refreshTokenSecret);

//     const newAccessToken = jwt.sign(
//       {
//         "UserInfo": {
//           "username": decoded.username,
//           "roles": decoded.roles
//         }
//       },
//       accessTokenSecret,
//       {expiresIn: '180s'}
//     );
//     res.locals.accessToken = newAccessToken;
//     return next();
//   } catch (error) {
//     console.log('Error during token refresh', error);
//     return next(error);
//   }
// }