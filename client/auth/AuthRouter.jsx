/**
 * ************************************
 *
 * @module  AuthRouter
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - routes for nav-bar
 * 
 * ************************************
 */

import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import backgroundImage from '/fallBG.jpg';
import NavBar from '../main/NavBar.jsx';

// navigator for having no account
const navAnonymous = (navigate)=>{
  navigate('/');
};

// navigator for profile
const signInClicked = (navigate)=>{
  navigate('/signedlogin');
};

// navigator for sign-out
const createAccountClicked = (navigate)=>{
  navigate('/signup');
};

const AuthRouter = () => {

  // initialize navigation
  const navigate = useNavigate();

  return (
    <div
      className='grow h-full w-full flex flex-col items-center justify-between overflow-x-auto overflow-y-auto bg-cover'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='flex flex-col h-full w-full'>
        {/* react-router-dom component for rendering appropriate route component */}
        <Outlet/>
      </div>
    </div>
  );
};

export default AuthRouter;
