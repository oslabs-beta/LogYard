import { createReducer } from '@reduxjs/toolkit';

import {
  TEST_ACTION,
} from '../constants/actionTypes';

const initialState = {
  count: 1, // Example property
};

const example = createReducer(initialState, (builder) => {
  builder
    .addCase(TEST_ACTION, (state, action) => {
      state.count += 1;
    });
});

export default example;
