/**
 * ************************************
 *
 * @module  AllLogsBarChart
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/20/2023
 * @description .jsx - creates a graph over time with all log types
 * 
 * ************************************
 */

import React, { useEffect, useState } from 'react';
import c3 from 'c3';

const AllLogsBarChart = ({ name, datesArray, dataArray, height, width }) => {
  const createGraph = () => {
    const chart = c3.generate({
      // id of element in jsx return block
      bindto: '#' + name,
      tooltip: {
        position: function (data, width, height, element) {
          return {top: 0, left: 0};
        }
      },
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
        // initial data values (before .load is initiated)
        columns: [
          ['dates', ...datesArray], // dates
          ...dataArray, // array of 7 log-type arrays, which consist of log-type counts per time interval
        ],
        // graph type
        type: 'line',
        // data colors (for level types)
        colors: {
          data1: '#ef4444', // equivalent to tailwind red-500
          data2: '#fb923c', // orange-400
          data3: '#22c55e', // green-500
          data4: '#60a5fa', // blue-400
          data5: '#2dd4bf', // teal-400
          data6: '#fde68a', // amber-200
          data7: '#a78bfa', // violet-400
        },
        // create groups based on level-types
        // groups: [['data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7']],
      },

      // axis properties
      axis: {
        // x-axis
        x: {
          type: 'categories',
          categories: [...datesArray],
          tick: {
            rotate: 90,
            multiline: true,
          },
          height: 300,
        },
        // y-axis
        y: {
          label: {
            text: 'Counts',
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
    });

    // chart size
    chart.resize({
      // size of graph
      width: width,
      height: height,
    });

    // return the chart
    return chart;
  };

  // state variables
  const [chart, setChart] = useState();

  // function to load data to graph
  const reloadChart = () => {
    chart.load({
      columns: [
        ['dates', ...datesArray], // dates
        ...dataArray // array of 7 log-type arrays, which consist of log-type counts per time interval
      ],
    });
  };

  // upon page render, set state as a new graph
  useEffect(() => {
    setChart(createGraph());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if chart exists, load data
  if (chart){
    reloadChart();
  }

  // return chart component
  return <div id={name}></div>;
};

export default AllLogsBarChart;
