/**
 * ************************************
 *
 * @module  logsReducer
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description reducer for logs
 * 
 * ************************************
 */

import { createReducer } from '@reduxjs/toolkit';

import {
  LOAD_LOGS,
  SET_ACTIVE_LOG,
} from '../constants/actionTypes';

// set initial state for log reducer
const initialState = {
  logs: [],
  filteredLogs: [],
  logFilters: [],
  activeLog: undefined,
};

const logsReducer = createReducer(initialState, (builder) => {
  builder
    // getting logs from database (for dashboard)
    .addCase(LOAD_LOGS, (state, action) => {
      state.logs = action.payload;
    })
    // setting the active log state (for navigating to individual log page)
    .addCase(SET_ACTIVE_LOG, (state, action) => {
      state.activeLog = action.payload;
    });
});


export default logsReducer;