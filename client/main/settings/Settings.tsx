/**
 * ************************************
 *
 * @module  Settings
 * @description .jsx - Display data related to an individual log
 * 
 * ************************************
 */

import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deleteAllLogs } from '../../state/actions/actions';
import { Dispatch } from '@reduxjs/toolkit';

const deleteAllLogsClicked = async (dispatch:Dispatch) => {

  const prompt:boolean = confirm('Are you sure you want to delete ALL of your logs?');

  if (prompt) {
    try {
      // delete all logs from state
      dispatch(deleteAllLogs());

      // delete all logs from database
      await axios.delete('/api/logs/deleteAllLogs');

      alert('All logs have been deleted.');
    } 
    catch (e) {
      alert('Log could not be deleted.');
      console.error(e);
    }
  }
  return;
};

const Settings: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className='text-center my-auto'>
      <button onClick={() => deleteAllLogsClicked(dispatch)} className='h-8 w-32 rounded-md bg-custom-red text-gray-50'>
				Delete All Logs
      </button>
    </div>
  );
};

export default Settings;