/**
 * ************************************
 *
 * @module  store
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description redux store
 * 
 * ************************************
 */

/**
 * ************************************
 *
 * @module  persistor
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description package to persist state across navigation
 * 
 * ************************************
 */

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import logsReducer from '../reducers/logsReducer';

// config for persisting state across navigation
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['activeLog'],
  blacklist: ['logs']
};

// params for persistReducer - (config object, reducer)
const persistedReducer = persistReducer(persistConfig, logsReducer); 

export const store = configureStore({
  reducer: {
    // for persisting state, pass the persistedReducer as value
    logsReducer: persistedReducer,
  },
  // WHAT DOES THIS DO..?
  middleware: [thunk]
});

export const persistor = persistStore(store);
