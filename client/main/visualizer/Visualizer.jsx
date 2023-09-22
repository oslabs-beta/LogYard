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

import React from 'react';
import { useSelector } from 'react-redux';

import Filter from '../dashboard/filters/Filter';

import TimeSeries from './TimeSeries';

const Visualizer = () => {
  const logData = useSelector(state=>state.logsReducer.filteredLogs);

  return (
    <div className='grow flex flex-col bg-gradient-to-t from-red-800 via-yellow-600 to-yellow-500'>
      <Filter />
      <TimeSeries logData={ logData } className='grow m-4'/>
    </div>
  );
};

export default Visualizer;