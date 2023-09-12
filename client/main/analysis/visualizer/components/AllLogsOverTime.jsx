import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import c3 from 'c3';

const AllLogsOverTime = () => {

  // const allLogs = useSelector( state => state.logsReducer.logs );

  const mockDates = [
    '2020-07-13',
    '2020-07-14',
    '2020-07-15',
    '2020-07-16',
    '2020-07-17',
    '2020-07-18',
    '2020-07-19',
    '2020-07-20',
    '2020-07-21',
    '2020-07-22',
    '2020-07-23',
    '2020-07-24'
  ];

  const mockData = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)
  ];

  // substitute for state until filters are made
  const [data, setData] = useState({
    // date format: 2023-09-06T14:48:20.958+00:00
    
    column0: [ 'x', ...mockDates ],
    column1: [ 'data1', ...mockData ],
    column2: [ 'data2', ...mockData ],
    column3: [ 'data3', ...mockData ],
    column4: [ 'data4', ...mockData ],
    column5: [ 'data5', ...mockData ],
    column6: [ 'data6', ...mockData ],
    column7: [ 'data7', ...mockData ],
  });

  // chart data
  const renderChart = () => {
    var chart = c3.generate({
      // id of element in jsx return block
      bindto: '#allLogsOverTime',

      // data values and manipulation
      data: {
        x: 'x',
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
          data.column0, // dates
          data.column1, // array with first stacked bar
          data.column2,
          data.column3,
          data.column4,
          data.column5,
          data.column6,
          data.column7,
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
            text: 'Y-axis name',
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
    
    chart.resize({
      // size of graph
      width: 1200,
      height: 600,
    });

    setTimeout(function () {
      chart.load({
        unload: ['x', 'data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7'],
        columns: [
          [ 'x', ...mockDates ],
          [ 'data1', ...mockData ],
          [ 'data2', ...mockData ],
          [ 'data3', ...mockData ],
          [ 'data4', ...mockData ],
          [ 'data5', ...mockData ],
          [ 'data6', ...mockData ],
          [ 'data7', ...mockData ],
        ]
      });
    }, 2000);

  };

  useEffect(() => {
    renderChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="bg-white mt-8 m-auto p-8 pl-4 place-content-center rounded-lg">
      <h1 className='text-4xl text-center'>All Logs Over Time</h1>
      <div id="allLogsOverTime"></div>
    </div>
  );
};

export default AllLogsOverTime;
