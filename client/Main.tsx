/**
 * ************************************
 *
 * @description Connects the store to App and implements state persistence
 * 
 * ************************************
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { Provider } from 'react-redux';
import { store, persistor } from './state/store/store.js';
import { PersistGate } from 'redux-persist/integration/react';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error('Element with ID "root" not found');
}

