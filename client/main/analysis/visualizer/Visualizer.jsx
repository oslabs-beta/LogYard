/**
 * ************************************
 *
 * @module  Visualizer
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/20/2023
 * @description renders various graph types into single jsx element
 * 
 * ************************************
 */

import React, { useEffect, useState } from 'react';

import AllLogsOverTime from './components/AllLogsOverTime.jsx';
import OneLogOverTime from './components/OneLogOverTime.jsx';
import AllLogsDonut from './components/AllLogsDonut.jsx';

const Visualizer = () => {
  return (
    <div className='flex flex-wrap bg-gradient-to-t from-red-800 via-yellow-600 to-yellow-500'>
      <AllLogsOverTime />
      <AllLogsDonut />
      <OneLogOverTime />
    </div>
  );
};

export default Visualizer;
