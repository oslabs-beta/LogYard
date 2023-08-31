import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './dashboard/dashboard.jsx';
import LogViewer from './logViewer/logViewer.jsx';
import Profile from './profile/profile.jsx';

const MainRouter = () => {
  console.log('MainRouter Reached');
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/logViewer' element={<LogViewer />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
