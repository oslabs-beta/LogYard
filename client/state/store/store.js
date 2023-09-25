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

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['activeLog'],
  blacklist: ['logs']
};

const persistedReducer = persistReducer(persistConfig, logsReducer); 

export const store = configureStore({
  reducer: {
    logsReducer: persistedReducer,
    userReducer,
  },
  // required for peristing
  middleware: [thunk]
});

export const persistor = persistStore(store);
