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

const MainRouter = () => {
  // inialize navigation
  const navigate = useNavigate();
  // initialize dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    /* gets logs from backend if cookie exists, redirects otherwise */
    const loadLogsOnce = async () => {
      // make a request to get logs from backend
      let logData = await fetch('/api/logs');

      // if response comes back ok, dispatch logs to save in state
      if (logData.ok) {
        logData = await logData.json();
        dispatch(loadLogs(logData));
      } else {
        // otherwise, redirect to login page
        signOutClicked(navigate);
      }
    };
    loadLogsOnce();
  }, []);

  return (
    <div className='flex flex-col h-full'>
      <NavBar
        routes={[
          [
            'Dashboard',
            () => {
              dashboardClicked(navigate);
            },
          ],
          [
            'Quantity',
            () => {
              profileClicked(navigate);
            },
          ],
          [
            'Timeline',
            () => {
              profileClicked(navigate);
            },
          ],
          [
            'Profile',
            () => {
              profileClicked(navigate);
            },
          ],
          [
            'Sign Out',
            () => {
              signOutClicked(navigate);
            },
          ],
        ]}
      />

      <Outlet />
    </div>
  );
};

export default MainRouter;
