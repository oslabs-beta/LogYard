import { createReducer } from '@reduxjs/toolkit';

import {
  LOAD_LOGS,
  SET_ACTIVE_LOG,
} from '../constants/actionTypes';

const initialState = {
  logs: [],
  filteredLogs: [],
  logFilters: [],
  activeLog: undefined,
};

const logsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(LOAD_LOGS, (state, action) => {
      state.logs = action.payload;
    })
    .addCase(SET_ACTIVE_LOG, (state, action) => {
      state.activeLog = action.payload;
    });
});


export default logsReducer;