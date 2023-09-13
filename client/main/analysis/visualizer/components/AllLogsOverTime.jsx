import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import c3 from 'c3';

import applyFilter from '../../../../state/filtering/applyFilter.js';

const AllLogsOverTime = () => {

  // get logs from state
  const allLogs = useSelector( state => state.logsReducer.logs );

  // array of dates for graph rendering
  let dates;

  // used to covert 'level' key (a string) to appropriate number (related to that level type)
  const levelToInd = (level) => {
    if (level === 'error') return 0;
    else if (level === 'warn') return 1;
    else if (level === 'info') return 2;
    else if (level === 'http') return 3;
    else if (level === 'verbose') return 4;
    else if (level === 'debug') return 5;
    else if (level === 'silly') return 6;
  };

  // returns an array of times specific to user-declared start time, end time, and desired number of intervals
  const getTimeArray = (startTime, endTime, intervals) => {

    // get date-relevant information
    // note: Date.parse() converts db date format (YYYY-MM-DDTHH:MM:SS.MSMSMS+00:00) to millisecond format
    const startToNum = Date.parse(startTime); 
    const endToNum = Date.parse(endTime);
    const totalTimeSpan = endToNum - startToNum;

    // calculate time interval between ticks
    const timeInterval = Math.floor(totalTimeSpan / intervals);

    // initialize array of times
    const timeArray = [];

    // loop 'interval' times, creating appropriate time array
    for (let i = 0; i < intervals; i++) {
      // start at start time and add increments in time until end time is met
      timeArray.push(startToNum + (timeInterval * i));
    }

    return timeArray;
  };

  const createDataArray = (logArray, startTime, endTime, intervals) => {
    console.log('createDataArray called')

    // create array of times based on user-inputted requests
    const timeArray = getTimeArray(startTime, endTime, intervals);
    // assign global 'dates' variable to timeArray -> for access in graph generation
    dates = timeArray;
    
    // create blank slate for log-type counts
    // structure: array consisting of 7 arrays - each with as many indexes as intervals
    const results = Array.from({length: 7}, (_, i) => {
      return Array(intervals).fill(0);
    });

    // iterate through log array and increment count at the respective data point in results if conditions are met
    logArray.forEach(log => {
      if (
        Date.parse(log.timestamp) >= timeArray[0] && 
        Date.parse(log.timestamp) <= timeArray[timeArray.length - 1]
      ) {
        // iterate through array of timeframes
        for (let i = 0; i < timeArray.length; i++) {
          // if log timestamp is in the range of one of them
          if (
            Date.parse(log.timestamp) >= timeArray[i] &&
            Date.parse(log.timestamp) <= timeArray[i + 1]
          ) {
            // increment results array of arrays at appropriate [time][logType]
            results[levelToInd(log.level)][i]++;
          }
        }
      }
    });

    // add data_ to beginning of each array for reference use in graph generation
    for (let i = 0; i < results.length; i++) {
      results[i].unshift(`data${i + 1}`);
    }
    console.log('result: ', results)
    // return results
    return results;

  };

  // state variables
  const [dataState, setDataState] = useState(
    // initialized as allLogs (within past 24 hours), divided into 24 intervals
    // !! CURENTLY NOT SET UP TO ACCOUNT FOR PAST 24 HRS !!
    createDataArray(allLogs, '2023-09-12T21:23:30.335Z', new Date().toISOString(), 24)
  );
  console.log('dataState: ', dataState);

  // chart data
  const renderChart = () => {
    var chart = c3.generate({
      // id of element in jsx return block
      bindto: '#allLogsOverTime',

      // data values and manipulation
      data: {
        x: 'dates',
        // axis labels (0)error, (1)warn, (2)info, (3)http, (4)verbose, (5)debug, (6)silly
        names: {
          data1: 'error',
          data2: 'warn',
          data3: 'info',
          data4: 'http',
          data5: 'verbose',
          data6: 'debug',
          data7: 'silly',
        },
        // data values
        columns: [
          ['dates', ...dates], // dates
          ...dataState // array of 7 log-type arrays, which consist of log-type counts per time interval
        ],
        // graph types
        type: 'bar',
        // data colors
        colors: {
          data1: '#A88C7D',
          data2: '#B2A68D',
          data3: '#7297A0',
          data4: '#7D99A0',
          data5: '#54738E',
          data6: '#82AC7C',
          data7: '#9DBA94',
        },
        // not needed if only showing one type of data, but useful for stacked bar-chart
        groups: [[
          'data1',
          'data2',
          'data3',
          'data4',
          'data5',
          'data6',
          'data7',
        ]],
        // in the case where no data is present
        empty: {
          label: {
            text: 'No Data',
          },
        },
      },

      // axis properties
      axis: {
        // x-axis
        x: {
          type: 'timeseries',
          tick: {
            rotate: 50,
            format: '%Y-%m-%d %H:%M:%S',
          },
          // label: {
          //   text: 'X-axis name',
          //   position: 'outer-center',
          // },
        },
        // y-axis
        y: {
          label: {
            text: 'Count',
            position: 'outer-middle',
          },
        },
      },

      // grid properties
      grid: {
        x: {
          show: true,
          color: '#000000',
        },
        y: {
          show: true,
          color: '#000000',
        },
      },

      // legend properties
      // legend: {
      //   show: true,
      //   position: 'inset',
      //   inset: {
      //     anchor: 'top-left',
      //     x: 30,
      //     y: 20,
      //     step: undefined,
      //   },
      // },
    });
    
    // chart size
    chart.resize({
      // size of graph
      width: 1200,
      height: 600,
    });

    // rerender data for live data flow
    // !! NEED TO FIX THIS - BROWSER CONSOLE GOES HAYWIRE !!
    // setTimeout(function () {
    //   setDataState(createDataArray(allLogs, '2023-09-12T21:23:30.335Z', new Date().toISOString(), 24))
    //   console.log('hello')
    //   chart.load({
    //     columns: [
    //       ['dates', ...dates], // dates
    //       ...dataState // array of 7 log-type arrays, which consist of log-type counts per time interval
    //     ],
    //   });
    // }, 1000);

  };
  renderChart();

  // this breaks it... use .load instead.
  // useEffect(() => {
  //   renderChart();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dataState]);

  return (
    <div className="bg-white mt-8 m-auto p-8 pl-4 place-content-center rounded-lg">
      <h1 className='text-4xl text-center'>All Logs Over Time</h1>
      <div id="allLogsOverTime"></div>
    </div>
  );
};

export default AllLogsOverTime;
