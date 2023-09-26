/**
 * ************************************
 *
 * @module  logController
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .getLogs gets all logs from the database
 * 
 * ************************************
 */

import addLog from './logController/addLog.js';
import getLogs from './logController/getLogs.js';

export default {
  addLog,
  getLogs,
};
