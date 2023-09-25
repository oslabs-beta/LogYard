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
import applyFilter from '../filtering/applyFilter';

import {
  LOAD_LOGS,
  SET_ACTIVE_LOG,
  FILTER_LOGS,
  SET_FILTERED_LOGS,
} from '../constants/actionTypes';

const initialState = {
  logs: [],
  filteredLogs: [],
  activeLog: undefined,
};

const logsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(LOAD_LOGS, (state, action) => {
      state.logs = action.payload;
      state.filteredLogs = action.payload;
    })
    .addCase(SET_ACTIVE_LOG, (state, action) => {
      state.activeLog = action.payload;
    })
    .addCase(FILTER_LOGS, (state, action)=>{
      try{
        state.filteredLogs = applyFilter(state.logs, action.payload);
      }
      catch (e) {
        alert('Failed filtering');
        console.log(e);
      }
    })
    .addCase(SET_FILTERED_LOGS, (state, action)=>{
      try{
        state.filteredLogs = state.filteredLogs = action.payload;
      }
      catch (e){
        alert('Failed navigating to log group');
        console.log(e);
      }
    });
});


export default logsReducer;