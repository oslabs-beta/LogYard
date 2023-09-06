import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadLogs } from '../state/actions/actions';


import NavBar from './NavBar.jsx';

const dashboardClicked = (navigate)=>{
  navigate('/main/dashboard');
};

const profileClicked = (navigate)=>{
  navigate('/main/profile');
};

const signOutClicked = (navigate)=>{

};

const loadLogsOnce = async (dispatch)=>{
  let logData = await fetch('/api/logs');
  logData = await logData.json();
  dispatch(loadLogs(logData));
};


const MainRouter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Load data to State
  useEffect(() => {
    loadLogsOnce(dispatch);
  }, []);

  return (
    <div className='flex flex-col h-full'>
      <NavBar routes={[
        ['Dashboard', () => {dashboardClicked(navigate);}],
        ['Quantity', () => {profileClicked(navigate);}],
        ['Timeline', () => {profileClicked(navigate);}],
        ['Profile', () => {profileClicked(navigate);}],
        ['Sign Out', () => {signOutClicked(navigate);}]
      ]}/>

      <Outlet/>
    </div>
  );
};

export default MainRouter;
