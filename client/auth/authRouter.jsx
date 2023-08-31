import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './login/login.jsx';
import Recovery from './recovery/recovery.jsx';
import Signup from './signup/signup.jsx';

const AuthRouter = () => {
  const variable = 0;

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/recovery' element={<Recovery />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AuthRouter;
