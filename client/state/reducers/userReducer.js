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
  SET_USER_DATA,
} from '../constants/actionTypes';

// set initial state for log reducer
const initialState = {
  userData: {}
};

const logsReducer = createReducer(initialState, (builder) => {
  builder
    // getting logs from database (for dashboard)
    .addCase(SET_USER_DATA, (state, action) => {
      state.userData = action.payload;
    });
});


export default logsReducer;