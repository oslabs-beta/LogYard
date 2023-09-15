import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import c3 from 'c3';

const OneLogOverTime = () => {

  // get all logs from state
  const allLogs = useSelector( state => state.logsReducer.logs );





  // left off here..






  // data from store (hard-coded for testing)
  const dates = ['2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18', '2020-07-19', '2020-07-20', '2020-07-21', '2020-07-22', '2020-07-23', '2020-07-24', '2020-07-25', '2020-07-26', '2020-07-27', '2020-07-28', '2020-07-29' ];
  const data1 = [ 13, 18, 11, 12, 14, 19, 17, 24, 22, 14, 36, 42, 32, 34, 20, 16, 22, 26 ];

  // substitute for state until filters are made
  const [data, setData] = useState({
    // date format: 2023-09-06T14:48:20.958+00:00
    logType: 'error',
    column0: [ 'x', ...dates ],
    column1: [ 'data1', ...data1 ],
  });

  // chart data
  const renderChart = () => {
    c3.generate({
      // id of element in jsx return block
      bindto: '#oneLogOverTime',

      // data values and manipulation
      data: {
        x: 'x',
        // axis labels
        names: {
          data1: `${data.logType} logs`,
        },
        // data values
        columns: [
          data.column0, // dates
          data.column1, // bar chart
        ],
        // graph types
        types: {
          data1: 'bar',
        },
        // data colors
        colors: {
          data1: '#E5890A',
        },
        // in the case where no data is present
        empty: {
          label: {
            text: 'No Data',
          },
        },
      },
      
      // bar properties
      bar: {
        width: {
          ratio: 0.9
        }
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
      legend: {
        show: true,
        position: 'inset',
        inset: {
          anchor: 'top-left',
          x: 30,
          y: 20,
          step: undefined,
        },
      },
    }).resize({
      // size of graph
      width: 1000,
      height: 600,
    });
  };

  // eslint claims renderChart is needed as a dependency here - its not..
  useEffect(() => {
    renderChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="bg-gray-800 text-gray-50  mt-8 m-auto p-8 pl-4 place-content-center rounded-lg">
      <h1 className='text-4xl text-center'>One Log Over Time</h1>
      <div id="oneLogOverTime"></div>
    </div>
  );
};

export default OneLogOverTime;
