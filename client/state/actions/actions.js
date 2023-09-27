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
  DELETE_LOG,
  DELETE_ALL_LOGS,
  FILTER_LOGS,
  SET_FILTERED_LOGS,
  SET_USER_DATA,
} from '../constants/actionTypes';

//Logs Reducer
export const loadLogs = createAction(LOAD_LOGS); // payload: Array containing all log data
export const setActiveLog = createAction(SET_ACTIVE_LOG);
export const deleteLog = createAction(DELETE_LOG);
export const deleteAllLogs = createAction(DELETE_ALL_LOGS);
export const filterLogs = createAction(FILTER_LOGS);// payload string to use to filter logs
export const setFilteredLogs = createAction(SET_FILTERED_LOGS);//payload none

//User Reducer
export const setUserData = createAction(SET_USER_DATA);//payload an object containing key: filtername, value: filterString