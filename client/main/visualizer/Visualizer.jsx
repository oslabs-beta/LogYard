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
import Donut from './Donut';

const Visualizer = () => {
  const logData = useSelector(state=>state.logsReducer.filteredLogs);

  return (
    <div className='grow flex flex-col'>
      <Filter />
      <div className='flex grow sm-flex-col'>
        <TimeSeries logData={ logData } className='grow m-4'/>
        <Donut logData={ logData } className='grow m-4'/>
      </div>
    </div>
  );
};

export default Visualizer;