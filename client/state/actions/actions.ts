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
import * as actionTypes from '../constants/actionTypes';
import { LogItem } from '../reducers/logsReducer';
import { UserData } from '../reducers/userReducer';
// import {
//   LOAD_LOGS,
//   SET_ACTIVE_LOG,
//   DELETE_LOG,
//   DELETE_ALL_LOGS,
//   FILTER_LOGS,
//   SET_FILTERED_LOGS,
//   SET_USER_DATA,
// } from '../constants/actionTypes';


//Logs Reducer
export const loadLogs = createAction(actionTypes.LOAD_LOGS, (logs:LogItem[]) => ({
  payload: logs
})); // payload: Array containing all log data
export const setActiveLog = createAction(actionTypes.SET_ACTIVE_LOG, (log: LogItem) => ({
  payload: log
}));
export const deleteLog = createAction(actionTypes.DELETE_LOG, (logId: string) => ({
  payload: logId
}));
export const deleteAllLogs = createAction(actionTypes.DELETE_ALL_LOGS);
export const filterLogs = createAction(actionTypes.FILTER_LOGS, (filterString: string) => ({
  payload: filterString
}));// payload string to use to filter logs
export const setFilteredLogs = createAction(actionTypes.SET_FILTERED_LOGS, (logs: LogItem[]) => ({
  payload: logs
}));//payload none

//User Reducer
export const setUserData = createAction(actionTypes.SET_USER_DATA, (userData: UserData) => ({
  payload: userData
}));//payload an object containing key: filtername, value: filterString