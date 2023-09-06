import express from 'express';
import logController from '../controllers/logController.js';
import authController from '../controllers/authController.js';

const router = express.Router();

router.get('/', 
  authController.checkCookie,
  logController.getLogs, 
  (req, res) => {
    if (res.locals.cookieStatus) {
      res.status(200).json(res.locals.logs);
    } else {
      res.sendStatus(400);
    }
    // console.log('Logs received');
    
  }
);


export default router;