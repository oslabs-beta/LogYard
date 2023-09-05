import express from 'express';
import logController from '../controllers/logController.js';

const router = express.Router();

router.get('/', 
  logController.getLogs, 
  (req, res) => {
    console.log('Logs received');
    res.status(200).json(res.locals.logs);
  }
);


export default router;