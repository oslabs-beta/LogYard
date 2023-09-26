/**
 * ************************************
 *
 * @module  logRouter
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description Used on page refresh - checks if a cookie exists and if it does, gets the logs from database
 * 
 * ************************************
 **/

import express from 'express';
import logController from '../controllers/logController.js';
import sessionController from '../controllers/sessionController.js';

const router = express.Router();

router.get('/',
  sessionController.checkCookie,
  logController.getLogs, 
  (req, res) => {
    if (res.locals.cookieStatus) {

      res.status(200).json(res.locals.logs);
    } else {

      res.sendStatus(400);
    }
  }
);

router.post('/', sessionController.checkCookie, logController.addLog, (req, res) => {
  res.sendStatus(200);
});

router.delete(
  '/delete/:id', 
  logController.deleteLog,
  (req, res) => {
    res.status(200).json(res.locals.deleted);
  }
);

export default router;