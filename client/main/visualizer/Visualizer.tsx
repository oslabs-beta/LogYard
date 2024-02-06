/**
 * ************************************
 *
 * @module  Visualizer
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
import BarGraph from './BarGraph';
import { RootState } from '../../state/store/store';



const Visualizer = () => {
  const logData = useSelector((state: RootState)=>state.logsReducer.filteredLogs);
  const [displayLine, setDisplayLine] = useState(true);
  const [displayDonut, setDisplayDonut] = useState(false);
  const [displayBar, setDisplayBar] = useState(false);

  return (
    <div className='grow flex flex-col'>
      <Filter />
      <Checkbox 
        displayLine={ displayLine } setDisplayLine={ setDisplayLine } 
        displayDonut={ displayDonut } setDisplayDonut={ setDisplayDonut } 
        displayBar={ displayBar } setDisplayBar={ setDisplayBar }/>
      <div className='flex grow sm-flex-col'>
        {displayLine && (<TimeSeries logData={ logData } className='grow my-4 mx-[0.5rem] first:ml-4 last:mr-4'/> )}
        {displayDonut && (<Donut logData={ logData } className='grow my-4 mx-[0.5rem] first:ml-4 last:mr-4'/> )}
        {displayBar && (<BarGraph logData={ logData } className='grow my-4 mx-[0.5rem] first:ml-4 last:mr-4'/> )}
      </div>
    </div>
  );
};

export default Visualizer;