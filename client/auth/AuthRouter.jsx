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

// navigator for dashboard
const dashboardClicked = (navigate)=>{
  navigate('/main/dashboard');
};

// navigator for profile
const profileClicked = (navigate)=>{
  navigate('/main/profile');
};

// navigator for sign-out
const signOutClicked = (navigate)=>{

};

const AuthRouter = () => {

  // initialize navigation
  const navigate = useNavigate();

  return (
    <div className='flex flex-col h-full'>
      {/* routes for the nav-bar */}
      <NavBar routes={[
        ['Dashboard', () => {dashboardClicked(navigate);}],
        ['Profile', () => {profileClicked(navigate);}],
        ['Sign Out', () => {signOutClicked(navigate);}]
      ]}/>
      {/* what does this do? */}
      <Outlet/>
    </div>
  );
};

export default AuthRouter;
