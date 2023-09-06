import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import logsReducer from '../reducers/logsReducer';

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
  },
  middleware: [thunk]
});

export const persistor = persistStore(store);
