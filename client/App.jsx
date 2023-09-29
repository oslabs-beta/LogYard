/**
 * ************************************
 *
 * @module  App
 * @description routers for entire application
 * 
 * ************************************
 */

import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthRouter from './auth/AuthRouter';
import Login from './auth/login/Login.jsx';
import Signup from './auth/signup/Signup.jsx';
import SignedLogin from './auth/signedLogin/SignedLogin';

import Settings from './main/settings/Settings.jsx';
import MainRouter from './main/MainRouter';
import Dashboard from './main/dashboard/Dashboard.jsx';
import LogViewer from './main/logViewer/LogViewer.jsx';
import Visualizer from './main/visualizer/Visualizer.jsx';

const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<AuthRouter />}>
          <Route path='/' element={<SignedLogin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/guestLogin' element={<Login />}/>
        </Route>
        <Route path='/main' element={<MainRouter />}>
          <Route path="/main" element={<Dashboard/>} />
          <Route path='/main/settings' element={<Settings/>} />
          <Route path="/main/logViewer" element={<LogViewer/>} />
          <Route path="/main/visualizer" element={<Visualizer/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
