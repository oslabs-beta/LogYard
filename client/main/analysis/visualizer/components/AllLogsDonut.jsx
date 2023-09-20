import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import c3 from 'c3';

import levelToInd from '../utilities/levelTypeToIndex.js';
import DonutChart from '../templates/DonutChart.jsx';

const AllLogsDonut = () => {
  
  // get logs from state
  const allLogs = useSelector( state => state.logsReducer.logs );

  // initialize variable to hold dataArray globally
  let dataArray;

  // creates an array of counts for each log type
  // Ex. dataArray = [ errorCount, warnCount, infoCount, httpCount, verboseCount, debugCount, sillyCount ]
  const createDataArray = (logArray, startTime, endTime) => {
    // convert user declared time to millisecond format
    const tempStart = Date.parse(startTime);
    const tempEnd = Date.parse(endTime);

    // create blank array, each index representing a log type
    const result = new Array(7).fill(0);

    logArray.forEach(log => {
      // get respective log's time
      const logTime = Date.parse(log.timestamp);
      // get respective log's level type in index position format
      const logIndex = levelToInd(log.level);
      // if log is between start and end time
      if (logTime >= tempStart && logTime <= tempEnd) {
        // increment result's appropriate index
        result[logIndex]++;
      }
    });
    
    // reassign global dataArray variable to be results array
    dataArray = result;
  };

  // invoke function
  const currentTime = new Date().toLocaleString();
  createDataArray(allLogs, '2023-09-13T21:23:30.335Z', currentTime);

  return (
    <div className="bg-gray-800 text-gray-50  mt-8 m-auto p-8 pl-4 place-content-center rounded-lg">
      <h1 className='text-4xl text-center'>Log Makeup</h1>
      <DonutChart
        name='allLogsPieChart'
        dataArray={dataArray}
        height='600'
        width= '600'
      />
    </div>
  );
};

export default AllLogsDonut;
