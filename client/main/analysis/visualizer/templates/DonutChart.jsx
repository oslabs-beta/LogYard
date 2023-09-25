/**
 * ************************************
 *
 * @module  DonutChart
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/20/2023
 * @description .jsx - creates a donut chart over time relative to log type counts
 * 
 * ************************************
 */

import React, { useEffect, useState } from 'react';
import c3 from 'c3';

const DonutChart = ({ name, dataArray, height, width }) => {
  const createGraph = () => {
    const chart = c3.generate({
      // id of element in jsx return block
      bindto: '#' + name,

      // data values and manipulation
      data: {
        names: {
          data1: 'error',
          data2: 'warn',
          data3: 'info',
          data4: 'http',
          data5: 'verbose',
          data6: 'debug',
          data7: 'silly',
        },
        // data values (the count for each logger type in selected amount of time)
        columns: [
          ['data1', dataArray[0]],
          ['data2', dataArray[1]],
          ['data3', dataArray[2]],
          ['data4', dataArray[3]],
          ['data5', dataArray[4]],
          ['data6', dataArray[5]],
          ['data7', dataArray[6]],
        ],
        // graph types
        type: 'donut',
        // data colors
        colors: {
          data1: '#ef4444', // equivalent to tailwind red-500
          data2: '#fb923c', // orange-400
          data3: '#22c55e', // green-500
          data4: '#60a5fa', // blue-400
          data5: '#2dd4bf', // teal-400
          data6: '#fde68a', // amber-200
          data7: '#a78bfa', // violet-400
        },
      },
    });

    chart.resize({
      width: width,
      height: height,
    });

    return chart;
  };

  // state vaiables
  const [chart, setChart] = useState();

  // exchanges current data with .load data
  const reloadChart = () => {
    chart.load({
      columns: [
        ['data1', dataArray[0]],
        ['data2', dataArray[1]],
        ['data3', dataArray[2]],
        ['data4', dataArray[3]],
        ['data5', dataArray[4]],
        ['data6', dataArray[5]],
        ['data7', dataArray[6]],
      ],
    });
  };

  // upon page load, create graph
  useEffect(() => {
    setChart(createGraph());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (chart) {
    reloadChart();
  }

  return <div id={name}></div>;
};

export default DonutChart;