/**
 * ************************************
 *
 * @module  OneLogOverTime
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/20/2023
 * @description .jsx - Compiles appropriate data and calls OneLogBarChart to create a graph
 * 
 * ************************************
 */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import getISOTimeArray from '../utilities/getISOTimeArray.js';
import getSTDTimeArray from '../utilities/getSTDTimeArray.js';
import OneLogBarChart from '../templates/OneLogBarChart.jsx';
import Dropdown from '../../../utility/InputBar/Dropdown.jsx';

const OneLogOverTime = () => {

  // array of dates for graph filtering (in ISO format)
  let ISOdates;
  // array of dates for graph rendering (in standard format)
  let STDdates;
  // results array (for global availability)
  let results;
  // logType global variable
  let logTypeForGraph;
  // global graph type vaiable
  let graphTypeForGraph;

  // get all logs from state
  const allLogs = useSelector( state => state.logsReducer.logs );

  const createDataArray = (logArray, logType, startTime, endTime, intervals) => {
    // gets appropriate index in results array based on time
    const getTimeIndex = (time) => {
      const tempStart = Date.parse(startTime);
      const tempEnd = Date.parse(endTime);

      const intervalWidth = ((tempEnd - tempStart) / intervals);

      return Math.floor((time - tempStart) / intervalWidth );
    };

    // create array of times based on user-inputted requests
    const timeArray = getISOTimeArray(startTime, endTime, intervals);
    // assign global 'ISOdates' variable to timeArray -> for access in filtering
    ISOdates = timeArray;

    // create array of times for graph axis labels
    const STDTimeArray = getSTDTimeArray(timeArray);
    // assign global 'STDdates' variable to STDTimeArray -> for access by graph
    STDdates = STDTimeArray;

    // create blank array, each index representing a log type
    const result = new Array(intervals).fill(0);

    // console.log('Time Array: ', timeArray)

    logArray.forEach(log => {
      // convert date to millisecond format
      const timeIndex = getTimeIndex(Date.parse(log.timestamp));
      // console.log('timeArray[timeIndex]: ', timeArray[timeIndex])
      if ( timeArray[timeIndex] ) {
        // console.log('timeArray[timeIndex]: ', timeArray[timeIndex])
        // console.log('log.level: ', log.level);
        // console.log('logType: ', logType);
        if (log.level === logType) {
          result[timeIndex] === 0 ? result[timeIndex] = 1 : result[timeIndex]++;
          // console.log('result[timeIndex]: ', result[timeIndex])
        }
      }
    });

    // add 'data1' to front of array for graph rendering reasons
    result.unshift('data1');

    return result;
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
  const [graphStartTime, setGraphStartTime] = useState(sevenDaysAgoInString);
  const [graphStartTimeLabel, setGraphStartTimeLabel] = useState('Past 7 Days');
  const [logType, setLogType] = useState('error');
  const [graphType, setGraphType] = useState('bar');
  
  // time selection options
  const timeDropdownOptions = [
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

  // log selection options
  const logDropdownOptions = [
    ['error', () => setLogType('error')],
    ['warn', () => setLogType('warn')],
    ['info', () => setLogType('info')],
    ['http', () => setLogType('http')],
    ['verbose', () => setLogType('verbose')],
    ['debug', () => setLogType('debug')],
    ['silly', () => setLogType('silly')],
  ];

  // log selection options
  const graphTypeDropdownOptions = [
    ['bar', () => setGraphType('bar')],
    ['line', () => setGraphType('line')],
  ];

  const invokedGraphCreation =  createDataArray(allLogs, logType, graphStartTime, new Date().toLocaleString(), 24);

  return (
    <div className="bg-gray-800 text-gray-50  mt-8 m-auto p-8 pl-4 place-content-center text-center rounded-lg">
      <h1 className='text-4xl text-center m-2'>One Log Over Time</h1>
      <Dropdown
        label={graphStartTimeLabel}
        className='m-5'
        entries={timeDropdownOptions}
      />
      <Dropdown
        label={logType}
        className='m-5'
        entries={logDropdownOptions}
      />
      <OneLogBarChart 
        name='oneLogOverTime'
        logType={logType}
        datesArray={STDdates}
        dataArray={invokedGraphCreation}
        height='800'
        width='1400'
      />
    </div>
  );
};

export default OneLogOverTime;
