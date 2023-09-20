/**
 * ************************************
 *
 * @module  AllLogsOverTime
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/20/2023
 * @description .jsx - Compiles appropriate data and calls AllLogsBarChart to create a graph
 * 
 * ************************************
 */

import React, { useEffect, useState } from 'react';
import AllLogsBarChart from '../templates/AllLogsBarChart.jsx';
import { useSelector } from 'react-redux';

import levelToInd from '../utilities/levelTypeToIndex.js';
import getISOTimeArray from '../utilities/getISOTimeArray.js';
import getSTDTimeArray from '../utilities/getSTDTimeArray.js';

import Dropdown from '../../../utility/InputBar/Dropdown.jsx';


/* Ryan's notes about how to better modularize this file

cosnt asdf = new ChartData()
asdf.setXlabels([asdf1, asdf2, asdf3])
asdf.addData(label, [H1, H2, H3])
asdf.addData(label, [H1, H2, H3])
asdf.addData(label, [H1, H2, H3])
asdf.addData(label, [H1, H2, H3])

<BarChart 
  name='allLogsOverTime'
  datesArray={asdf.labels}
  dataArray={asdf.data}
  height='600'
  width='1200'
/>
*/

const AllLogsOverTime = () => {

  // get logs from state
  const allLogs = useSelector( state => state.logsReducer.logs );

  // array of dates for graph filtering (in ISO format)
  let ISOdates;
  // array of dates for graph rendering (in standard format)
  let STDdates;
  // results array (for global availability)
  let results;

  // returns an array of data points, corresponding to start and end times, intervals, and individual log-type
  const createDataArray = (logArray, startTime, endTime, intervals) => {

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
    
    // create blank slate for log-type counts
    // structure: array consisting of 7 arrays - each with as many indexes as intervals
    results = Array.from({length: 7}, (_, i) => {
      return Array(intervals).fill(0);
    });

    // iterate through log array and increment count at the respective data point in results if conditions are met
    logArray.forEach(log => {
      // convert date to millisecond format
      const timeIndex = getTimeIndex(Date.parse(log.timestamp));
      // increment count in result array at appropriate log-type and time
      if ( timeArray[timeIndex] ) {
        results[levelToInd(log.level)][timeIndex]++;
      }
    });

    // add data_ to beginning of each array for reference use in graph generation
    for (let i = 0; i < results.length; i++) {
      results[i].unshift(`data${i + 1}`);
    }

    // return results
    console.log('results: ', results);
    return results;

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
  const dataState = createDataArray(allLogs, graphStartTime, currentTime, 24);  
  
  return (
    <div className="bg-gray-800 text-gray-50  mt-8 m-auto p-8 pl-4 place-content-center text-center rounded-lg">
      <h1 className='text-4xl text-center'>All Logs Over Time</h1>
      <Dropdown
        label={graphStartTimeLabel}
        className='m-5'
        entries={dropdownOptions}
      />
      <AllLogsBarChart 
        name='allLogsOverTime'
        datesArray={STDdates}
        dataArray={dataState}
        height='800'
        width='1400'
      />
    </div>
  );

};

export default AllLogsOverTime;
