import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import c3 from 'c3';

const TotalPie = () => {
  // const allLogs = useSelector( state => state.logsReducer.logs );

  // substitute for state until filters are made
  const [data, setData] = useState({
    // initial state
  });

  // chart data
  const renderChart = () => {
    c3.generate({
      // id of element in jsx return block
      bindto: '#totalPie',

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
          ['data1', 10],
          ['data2', 25],
          ['data3', 13],
          ['data4', 17],
          ['data5', 29],
          ['data6', 3],
          ['data7', 16],
        ],
        // graph types
        type: 'donut',
        // data colors
        colors: {
          data1: '#3D3D3D', //black
          data2: '#9D5C0D', //dark brown
          data3: '#E5890A', //orange brown
          data4: '#F7D08A', //tan
          data5: '#aaa', //gray
          data6: '#9C2310', //Red Brown
          data7: '#FC5713', //orange
        },
      },

      // donut: {
      //   title: 'Log Makeup - Past 24 hours'
      // },

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
    })
      .resize({
      // size of graph
        width: 600,
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
      <h1 className='text-4xl text-center'>Log Makeup</h1>
      <div id="totalPie"></div>
    </div>
  );
};

export default TotalPie;
