/**
 * ************************************
 *
 * @module  MainRouter
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description description goes here...
 * 
 * ************************************
 */

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadLogs } from '../state/actions/actions';

import NavBar from './NavBar.jsx';

// navigator for dashboard
const dashboardClicked = (navigate) => {
  navigate('/main/dashboard');
};

// navigator for profile
const profileClicked = (navigate) => {
  navigate('/main/profile');
};

// navigator for sign out
const signOutClicked = (navigate) => {
  navigate('/');
};

// function for getting logs from database
const loadLogsOnce = async (dispatch) => {
  let logData = await fetch('/api/logs');
  logData = await logData.json();
  dispatch(loadLogs(logData));
};


const MainRouter = () => {
  // inialize navigation
  const navigate = useNavigate();
  // initialize dispatch
  const dispatch = useDispatch();

  // load data to state upon page initialization
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
