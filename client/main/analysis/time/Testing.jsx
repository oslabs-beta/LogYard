import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import c3 from 'c3';

const Testing = () => {

  var chart = c3.generate({
    bindto: '#c3-chart',
    data: {
      type: 'bar',
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25],
      ],
    },
  }).resize({
		// size of graph
		width: 1200,
		height: 600,
	});

  setTimeout(function () {
    chart.load({
      unload: true,
      columns: [['data1', 100, 90, 80, 70, 60, 50]],
    });
  }, 2000);

  // setTimeout(function () {
  //   chart.load({
  //     columns: [
  //       ['data2', 50, 60, 70, 45, 24, 15],
  //       ['data3', 30, 35, 69, 20, 25, 10],
  //     ],
  //   });
  // }, 4000);

  // setTimeout(function () {
  //   chart.load({
  //     columns: [['data3', 67, 45, 36, 87, 105, 33]],
  //     unload: ['data3'],
  //   });
  // }, 6000);


  return (
    <div className="bg-white mt-8 m-auto p-8 pl-4 place-content-center rounded-lg">
      <div id="c3-chart"></div>
    </div>
  );
};

export default Testing;

