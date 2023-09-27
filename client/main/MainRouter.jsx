/**
 * ************************************
 *
 * @module  MainRouter
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description Overall layout for any page that requires sign in.
 *
 * ************************************
 */

import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadLogs, setUserData } from '../state/actions/actions';
import NavBar from './NavBar.jsx';

const loadAllLogs = async (dispatch, navigate) => {
  let logData = await fetch('/api/logs');

  if (logData.ok) {
    logData = await logData.json();
    
    dispatch(loadLogs(logData));
  } else {
    navigate('/');
  }
};

const signOutUser = async (dispatch, navigate) => {
  try {
    await fetch('/api/profile/signout', {
      method: 'DELETE',
    });

    dispatch(setUserData([]));

    navigate('/');

  } catch (err) {
    console.log(err);
  }
};

const MainRouter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    loadAllLogs(dispatch, navigate);
  }, []);

  return (
    <div className='flex flex-col h-full'>
      <NavBar
        routes={[
          [ 'Dashboard', () => { navigate('/main'); } ],
          [ 'Visualize', () => { navigate('/main/visualizer'); } ],
          [ 'Sign Out', () => { signOutUser(dispatch, navigate); } ],
        ]}
      />
      <Outlet />
    </div>
  );
};

export default MainRouter;
