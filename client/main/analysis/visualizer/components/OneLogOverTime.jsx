import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import c3 from 'c3';

import levelToInd from '../utilities/levelTypeToIndex.js';
import getISOTimeArray from '../utilities/getISOTimeArray.js';
import getSTDTimeArray from '../utilities/getSTDTimeArray.js';
import OneLogBarChart from '../templates/OneLogBarChart.jsx';
// import { Dropdown } from '../../../utility/InputBar/Dropdown.jsx';

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

  const createDataArray = (logArray, logType, graphType, startTime, endTime, intervals) => {

    // declare logType globally
    logTypeForGraph = logType;

    // declare graphType globally
    graphTypeForGraph = graphType;

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
    })

    result.unshift('data1');

    return result;
  };
  
  const [isOpen, setOpen] = useState(false);
  
  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  const invokedGraphCreation =  createDataArray(allLogs, 'error','bar', '2023-09-13T21:23:30.335Z', new Date().toLocaleString(), 24);

  return (
    <div className="bg-gray-800 text-gray-50  mt-8 m-auto p-8 pl-4 place-content-center text-center rounded-lg">
      <h1 className='text-4xl text-center m-2'>One Log Over Time</h1>
      {/* <Dropdown 
        label={'Log Type'}
        entries={' STOPPED HERE - reference dashboard/filters/Filer.jsx for more info on what goes here. '}
      /> */}
      <OneLogBarChart 
        name='oneLogOverTime'
        logType={logTypeForGraph}
        graphType={graphTypeForGraph}
        datesArray={STDdates}
        dataArray={invokedGraphCreation}
        height='800'
        width='1400'
      />
    </div>
  )
};

export default OneLogOverTime;
