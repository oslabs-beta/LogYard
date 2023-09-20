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
        type: 'bar',
        // data colors (for level types)
        colors: {
          data1: '#3D3D3D', //black
          data2: '#9D5C0D', //dark brown
          data3: '#E5890A', //orange brown
          data4: '#F7D08A', //tan
          data5: '#aaa', //gray
          data6: '#9C2310', //Red Brown
          data7: '#FC5713', //orange
        },
        // create groups based on level-types
        groups: [['data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7']],
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
