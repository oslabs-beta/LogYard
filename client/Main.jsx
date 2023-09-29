/**
 * ************************************
 *
 * @description Connects the store to App and implements state persistence
 * 
 * ************************************
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store, persistor } from './state/store/store.js';
import { PersistGate } from 'redux-persist/integration/react';

window.addEventListener('error', () => {console.log('error')});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
