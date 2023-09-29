/**
 * ************************************
 *
 * @module  userReducer
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

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SET_USER_DATA, (state, action) => {
      state.userData = action.payload;
    });
});


export default userReducer;