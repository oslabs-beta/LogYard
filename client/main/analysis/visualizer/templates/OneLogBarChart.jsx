/**
 * ************************************
 *
 * @module  OneLogBarChart
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/20/2023
 * @description .jsx - creates a graph over time with one log type
 * 
 * ************************************
 */

import React, { useEffect, useState } from 'react';
import c3 from 'c3';

const OneLogBarChart = ({ name, logType, datesArray, dataArray, height, width }) => {
  
  // graph colors
  const colors = {
    error: '#ef4444', // equivalent to tailwind red-500
    warn: '#fb923c', // orange-400
    info: '#22c55e', // green-500
    http: '#60a5fa', // blue-400
    verbose: '#2dd4bf', // teal-400
    debug: '#fde68a', // amber-200
    silly: '#a78bfa', // violet-400
  };
  
  const createGraph = () => {

    const chart = c3.generate({
      // id of element in jsx return block
      bindto: '#' + name,
      tooltip: {
        position: function (data, width, height, element) {
          return { top: 0, left: 0 };
        },
      },
      // data values and manipulation
      data: {
        x: 'dates',
        // axis labels (0)error, (1)warn, (2)info, (3)http, (4)verbose, (5)debug, (6)silly
        names: {
          data1: `${logType}`,
        },
        // initial data values (before .load is initiated)
        columns: [
          ['dates', ...datesArray], // dates
          dataArray, // array of log-type, which consist of log-type counts per time interval
        ],
        // graph type
        type: 'bar',
        // data colors (for level types)
        colors: {
          data1: `${colors[logType]}`, // black
        },
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
        dataArray, // array of 7 log-type arrays, which consist of log-type counts per time interval
      ],
      colors: {
        data1: `${colors[logType]}`, // black
      },
    });
  };

  // upon page render, set state as a new graph
  useEffect(() => {
    setChart(createGraph());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if chart exists, load data
  if (chart) {
    reloadChart();
  }

  // return chart component
  return <div id={name}></div>;
};

export default OneLogBarChart;
