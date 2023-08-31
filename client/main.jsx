import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from './state/store/store';
import './stylesheets/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
