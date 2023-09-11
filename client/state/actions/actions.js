/**
 * ************************************
 *
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description action creators
 * 
 * ************************************
 */

import { createAction } from '@reduxjs/toolkit';

import {
  LOAD_LOGS,
  SET_ACTIVE_LOG,
  FILTER_LOGS
} from '../constants/actionTypes';

export const loadLogs = createAction(LOAD_LOGS); // payload: Array containing all log data
export const setActiveLog = createAction(SET_ACTIVE_LOG);
export const filterLogs = createAction(FILTER_LOGS);// payload string to use to filter logs