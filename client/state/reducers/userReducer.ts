/**
 * ************************************
 *
 * @module  userReducer
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description Contains user information such as saved filters
 * 
 * ************************************
 */

import { createReducer } from '@reduxjs/toolkit';

import { setUserData } from '../actions/actions';

export interface UserState {
  userData: UserData
}

export interface UserData {
  _id: string
  username: string
  password: string
  savedFilters: any
  createdAt: string
}
const initialState: UserState = {
  userData: {
    _id: '',
    username: '',
    password: '',
    savedFilters: [],
    createdAt: ''
  }
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});


export default userReducer;