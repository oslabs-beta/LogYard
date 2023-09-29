/**
 * ************************************
 *
 * @module  store
 * @description centralizes reducers and adds persistent storage for logs
 * 
 * ************************************
 */


import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer} from 'redux-persist';
import persistCombineReducers from 'redux-persist/es/persistCombineReducers';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logsReducer from '../reducers/logsReducer';
import userReducer from '../reducers/userReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducers = persistCombineReducers(persistConfig, {logsReducer, userReducer});

export const store = configureStore({
  reducer: persistedReducers,
  // required for persisting
  middleware: [thunk]
});

export const persistor = persistStore(store);
