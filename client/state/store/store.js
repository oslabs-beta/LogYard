import { configureStore } from '@reduxjs/toolkit';
import logsReducer from '../reducers/logsReducer';

const store = configureStore({
  reducer: {
    // Reducers go here
    logsReducer
  },
});

export default store;
