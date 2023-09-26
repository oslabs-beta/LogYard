/**
 * ************************************
 *
 * @module  levelToInd
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/20/2023
 * @description A graph for displaying time series data about logs.
 * 
 * ************************************
 */

import React, { useEffect, useRef, useState } from 'react';
import GraphResize from './utility/GraphResize';
import LineGraph from './utility/LineGraph';
import timeBucketData from './utility/timeBucket';
import { oneDay, twoDays, oneWeek } from './utility/timeOptions';
import Dropdown from '../utility/InputBar/Dropdown';

const timeOptions = [
  oneDay(),
  twoDays(),
  oneWeek(),
];

const makeRandomID = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
};

const assignDataToGraph = (lineGraph, logData, timeOption) => {
  lineGraph.clear();

  if (Array.isArray(logData)){
    lineGraph.Graph('All Logs', timeBucketData( logData, timeOption ));
  }
  else {
    for (const [key, value] of Object.entries(logData)){
      lineGraph.Graph(key, timeBucketData( value, timeOption ));
    }
  }

  lineGraph.setXLabels(timeOption.getDivisionLabels());
  lineGraph.genColorData();
  
  lineGraph.loadData();
};

const TimeSeries = ({logData, className}) => {
  const bindIDRef = useRef(makeRandomID(6));
  const useRefGraph = useRef(new LineGraph(bindIDRef.current));
  const initializeObj = useRef({});

  const [timeOption, setTimeOption] = useState(timeOptions[0]);
  const lineGraph = useRefGraph.current;

  useEffect(() => {
    if (!lineGraph.chart) lineGraph.applyGraphChanges();
    
    assignDataToGraph(lineGraph, logData, timeOption);

    initializeObj.initialize(lineGraph.chart);
  }, [timeOption, logData, lineGraph]);

  return (
    <div className={`flex flex-col bg-gray-800 text-gray-50 p-8 pl-4 place-content-center text-center rounded-lg ${ className }`}>
      <h1 className='text-4xl text-center'>Time Series Data</h1>
      <Dropdown
        label={timeOption.label}
        className='m-5'
        entries={ timeOptions.map((el)=>[el.label, ()=>setTimeOption(el)]) }
      />
      <GraphResize bindID={ bindIDRef.current } initializeObj={ initializeObj } className='grow'/>
    </div>
  );
};

export default TimeSeries;