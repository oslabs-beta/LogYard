/**
 * ************************************
 *
 * @module  AllLogsDonut
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/20/2023
 * @description .jsx - Compiles appropriate data and calls DonutChart to create a graph
 * 
 * ************************************
 */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import levelToInd from '../utilities/levelTypeToIndex.js';
import DonutChart from '../templates/DonutChart.jsx';
import Dropdown from '../../../utility/InputBar/Dropdown.jsx';

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

  // current time variable
  const currentTime = new Date().toLocaleString();
  // Past 24 hours
  const twentyFourHoursAgoInMS = Date.parse(currentTime) - 86400000;
  const twentyFourHoursAgoInString = new Date(twentyFourHoursAgoInMS).toLocaleString();
  // Past 48 hours
  const fourtyEightHoursAgoInMS = Date.parse(currentTime) - 86400000;
  const fourtyEightHoursAgoInString = new Date(fourtyEightHoursAgoInMS).toLocaleString();
  // Past 7 days
  const sevenDaysAgoInMS = Date.parse(currentTime) - 604800000;
  const sevenDaysAgoInString = new Date(sevenDaysAgoInMS).toLocaleString();

  // local state variables
  const [graphStartTime, setGraphStartTime] = useState(twentyFourHoursAgoInString);
  const [graphStartTimeLabel, setGraphStartTimeLabel] = useState('Past 24 Hours');

  // time selection options
  const dropdownOptions = [
    ['Past 24 Hours', 
      () => {
        setGraphStartTime(twentyFourHoursAgoInString);
        setGraphStartTimeLabel('Past 24 Hours');
      }
    ],
    ['Past 48 Hours', 
      () => {
        setGraphStartTime(fourtyEightHoursAgoInString);
        setGraphStartTimeLabel('Past 48 Hours');
      }
    ],
    ['Past 7 Days', 
      () => {
        setGraphStartTime(sevenDaysAgoInString);
        setGraphStartTimeLabel('Past 7 Days');
      }
    ],
  ];

  // initial createDataArray call to get counts related to time
  const dataState = createDataArray(allLogs, graphStartTime, currentTime);  

  return (
    <div className="bg-gray-800 text-gray-50  mt-8 m-auto p-8 pl-4 place-content-center text-center rounded-lg">
      <h1 className='text-4xl text-center'>Log Makeup</h1>
      <Dropdown
        label={graphStartTimeLabel}
        className='m-5'
        entries={dropdownOptions}
      />
      <DonutChart
        name='allLogsPieChart'
        dataArray={dataArray}
        height='800'
        width= '800'
      />
    </div>
  );
};

export default AllLogsDonut;
