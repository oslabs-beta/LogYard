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

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Filter from '../dashboard/filters/Filter';
import TimeSeries from './TimeSeries';
import Donut from './Donut';
import Checkbox from './Checkbox';



const Visualizer = () => {
  const logData = useSelector(state=>state.logsReducer.filteredLogs);
  const [displayLine, setDisplayLine] = useState(true);
  const [displayDonut, setDisplayDonut] = useState(true);

  return (
    <div className='grow flex flex-col'>
      <Filter />
      <Checkbox displayLine={ displayLine } setDisplayLine={ setDisplayLine } displayDonut={ displayDonut } setDisplayDonut={ setDisplayDonut } />
      <div className='flex grow sm-flex-col'>
        {displayLine && (<TimeSeries logData={ logData } className='grow m-4'/> )}
        {displayDonut && (<Donut logData={ logData } className='grow m-4'/> )}
      </div>
    </div>
  );
};

export default Visualizer;