/**
 * ************************************
 *
 * @module  Dashboard
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - combines filter options and log table
 * 
 * ************************************
 */

import React from 'react';
import AllLogs from './logViews/AllLogs';
import Filter from './filters/Filter';

import OneLogOverTime from '../analysis/time/OneLogOverTime.jsx';
import TotalPie from '../analysis/time/TotalPie.jsx';
import AllLogsOverTime from '../analysis/time/AllLogsOverTime.jsx';

import Testing from '../analysis/time/Testing.jsx';

const Dashboard = () => {
  
  return (
    <div className='flex flex-col grow h-5/6'>
      {/* filter options component */}
      <Filter/>
      {/* log table */}
      <AllLogs/>
      {/* <Time /> */}
      <Testing />
      <OneLogOverTime />
      <TotalPie />
      <AllLogsOverTime />
    </div>
  );
};

export default Dashboard;
