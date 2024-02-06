/**
 * ************************************
 *
 * @module  TimeSeries
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
import { LogItem } from '../../state/reducers/logsReducer';
import { TimeOption } from './utility/types';
import { TimeSeriesGraphProps } from './types';

const timeOptions = [
  oneDay(),
  twoDays(),
  oneWeek(),
];

const makeRandomID = (length: number) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
};

const assignDataToGraph = (lineGraph: any, logData: LogItem, timeOption: TimeOption) => {
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

const TimeSeries = ({logData, className}: TimeSeriesGraphProps) => {
  const bindIDRef = useRef(makeRandomID(6));
  const useRefGraph = useRef(new LineGraph(bindIDRef.current));
  const initializeObj: any = useRef({});

  const [timeOption, setTimeOption] = useState(timeOptions[0]);
  const lineGraph = useRefGraph.current;

  useEffect(() => {
    if (!lineGraph.chart) lineGraph.applyGraphChanges();
    
    assignDataToGraph(lineGraph, logData, timeOption);

    initializeObj.initialize(lineGraph.chart);
  }, [timeOption, logData, lineGraph]);

  return (
    <div className={`flex flex-col bg-custom-tan text-custom-darkgreen p-8 pl-4 place-content-center text-center rounded-lg ${ className }`}>
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