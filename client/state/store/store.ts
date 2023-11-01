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


import { configureStore, Action } from '@reduxjs/toolkit';
import { Persistor, persistStore } from 'redux-persist';
import persistCombineReducers from 'redux-persist/es/persistCombineReducers';
import storage from 'redux-persist/lib/storage';
import thunk, { ThunkAction } from 'redux-thunk';
import logsReducer, { LogsState} from '../reducers/logsReducer';
import userReducer, { UserState } from '../reducers/userReducer';


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducers = persistCombineReducers(persistConfig, {
  logsReducer,
  userReducer
});

export type RootState = {
  logsReducer: LogsState
  userReducer: UserState
}
export const store = configureStore({
  reducer: persistedReducers,
  // required for persisting
  middleware: [thunk]
});

export const persistor: Persistor = persistStore(store);

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;