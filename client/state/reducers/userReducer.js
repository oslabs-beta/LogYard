/**
 * ************************************
 *
 * @module  logsReducer
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description Contains user information such as saved filters
 * 
 * ************************************
 */

import { createReducer } from '@reduxjs/toolkit';

import {
  SET_USER_DATA,
} from '../constants/actionTypes';

const initialState = {
  userData: {}
};

const logsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SET_USER_DATA, (state, action) => {
      state.userData = action.payload;
    });
});


export default logsReducer;