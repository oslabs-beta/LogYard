/**
 * ************************************
 *
 * @module  store
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description centralizes reducers and adds persistent storage for logs
 * 
 * ************************************
 */


import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logsReducer from '../reducers/logsReducer';
import userReducer from '../reducers/userReducer';

const logsPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['activeLog'],
  blacklist: ['logs']
};

const userPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['savedFilters'],
  blacklist: ['password']
};

const persistedLogsReducer = persistReducer(logsPersistConfig, logsReducer); 
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

export const store = configureStore({
  reducer: {
    logsReducer: persistedLogsReducer,
    userReducer: persistedUserReducer,
  },
  // required for peristing
  middleware: [thunk]
});

export const persistor = persistStore(store);
