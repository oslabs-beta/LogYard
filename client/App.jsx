/**
 * ************************************
 *
 * @module  App
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description routers for entire application
 * 
 * ************************************
 */

//Change /main/ to be dashboard rouute
import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthRouter from './auth/AuthRouter';
import MainRouter from './main/MainRouter';
import Dashboard from './main/dashboard/Dashboard.jsx';
import LogViewer from './main/logViewer/LogViewer.jsx';
import Profile from './main/profile/Profile.jsx';
import Login from './auth/login/Login.jsx';
import Signup from './auth/signup/Signup.jsx';
import Recovery from './auth/recovery/Recovery.jsx';
import Visualizer from './main/analysis/visualizer/Visualizer.jsx';

const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<AuthRouter />}>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/recovery' element={<Recovery />} />
        </Route>
        <Route path='/main' element={<MainRouter />}>
          <Route path="/main/dashboard" element={<Dashboard/>} />
          <Route path="/main/logViewer" element={<LogViewer/>} />
          <Route path="/main/profile" element={<Profile/>} />
          <Route path="/main/visualizer" element={<Visualizer/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
