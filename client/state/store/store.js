import { configureStore } from '@reduxjs/toolkit';
import example from '../reducers/example';

const store = configureStore({
  reducer: {
    // Reducers go here
    example,
  },
});

export default store;
