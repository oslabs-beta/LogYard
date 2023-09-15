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

import NavBar from '../main/NavBar.jsx';


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
    <div className='flex flex-col h-full'>
      {/* routes for the nav-bar */}
      <NavBar routes={[
        ['No Account', () => {navAnonymous(navigate);}],
        ['Sign In', () => {signInClicked(navigate);}],
        ['Create Account', () => {createAccountClicked(navigate);}]
      ]}/>
      {/* what does this do? */}
      <Outlet/>
    </div>
  );
};

export default AuthRouter;
