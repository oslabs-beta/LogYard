/**
 * ************************************
 *
 * @module  logsReducer
 * @description reducer for logs
 * 
 * ************************************
 */

import { createReducer } from '@reduxjs/toolkit';
import applyFilter from '../filtering/applyFilter';
import { PayloadAction } from '@reduxjs/toolkit';

// import {
//   LOAD_LOGS,
//   SET_ACTIVE_LOG,
//   FILTER_LOGS,
//   SET_FILTERED_LOGS,
//   DELETE_LOG,
//   DELETE_ALL_LOGS,
// } from '../constants/actionTypes';

import * as actions from '../actions/actions'

export interface LogsState {
  logs: LogItem[]
  filteredLogs: LogItem[]
  activeLog: LogItem 
}

export interface LogItem {
  level: string
  message: string
  meta: any
  timestamp: string
  _id: string
}

const initialState: LogsState = {
  logs: [],
  filteredLogs: [],
  activeLog: {
    level: '',
    message: '',
    meta: '',
    timestamp: '',
    _id: '',
  },
};



const logsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.loadLogs, (state, action) => {
      state.logs = action.payload;
      state.filteredLogs = action.payload;
    })
    .addCase(actions.setActiveLog, (state, action) => {
      state.activeLog = action.payload;
    })
    .addCase(actions.deleteLog, (state, action) => {
      try{
        const idToDelete = action.payload;
        state.logs = state.logs.filter((log) => log._id !== idToDelete);
        state.filteredLogs = state.filteredLogs.filter((log) => log._id !== idToDelete);
      }
      catch (e) {
        alert('Couldn\'t delete this log');
        console.log(e);
      }
    })
    .addCase(actions.deleteAllLogs, (state) => {
      state.logs = [];
      state.filteredLogs = [];
      state.activeLog = {
        level: '',
        message: '',
        meta: '',
        timestamp: '',
        _id: '',
      };
    })
    .addCase(actions.filterLogs, (state, action)=>{
      try{
        state.filteredLogs = applyFilter(state.logs, action.payload);
      }
      catch (e) {
        alert('Failed filtering');
        console.log(e);
      }
    })
    .addCase(actions.setFilteredLogs, (state, action)=>{
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