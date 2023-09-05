import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import NavBar from '../main/NavBar.jsx';

const dashboardClicked = (navigate)=>{
  navigate('/main/dashboard');
};

const profileClicked = (navigate)=>{
  navigate('/main/profile');
};

const signOutClicked = (navigate)=>{

};

const AuthRouter = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col h-full'>
      <NavBar routes={[
        ['Dashboard', () => {dashboardClicked(navigate);}],
        ['Profile', () => {profileClicked(navigate);}],
        ['Sign Out', () => {signOutClicked(navigate);}]
      ]}/>

      <Outlet/>
    </div>
  );
};

export default AuthRouter;
