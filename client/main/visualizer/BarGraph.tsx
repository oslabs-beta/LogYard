/**
 * ************************************
 *
 * @module  BarGraph
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
import { BarGraphProps } from './types';

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

const assignDataToGraph = (lineGraph: any, logData: LogItem[], timeOption: TimeOption) => {
  timeOption.numDivisions = 1;
  lineGraph.clear();

  if (Array.isArray(logData)){
    lineGraph.Graph('Log Counts', timeBucketData(logData, timeOption));
    lineGraph.setXLabels(['All Logs']);
  }
  else {
    const labels = [];
    const columnData = [];
    for (const [key, value] of Object.entries(logData)){
      labels.push(key);
      columnData.push(timeBucketData(value as LogItem[], timeOption)[0]);
    }
    
    lineGraph.Graph('Log Counts', columnData);
    lineGraph.setXLabels(labels);
  }

  lineGraph.genColorData();
  
  lineGraph.loadData();
};

const BarGraph = ({logData, className}: BarGraphProps) => {
  const bindIDRef = useRef(makeRandomID(6));
  const useRefGraph = useRef(new LineGraph(bindIDRef.current));
  const initializeObj: any = useRef({});

  const [timeOption, setTimeOption] = useState(timeOptions[0]);
  const lineGraph = useRefGraph.current;

  console.log(initializeObj, 'initializeObj');

  useEffect(() => {
    if (!lineGraph.chart) {
      lineGraph.data.type = 'bar';
      lineGraph.applyGraphChanges();
    }
    
    assignDataToGraph(lineGraph, logData, timeOption);

    initializeObj.initialize(lineGraph.chart);
  }, [timeOption, logData, lineGraph]);

  return (
    <div className={`flex flex-col bg-custom-tan text-custom-darkgreen p-8 pl-4 place-content-center text-center rounded-lg ${ className }`}>
      <h1 className='text-4xl text-center'>Bar Graph</h1>
      <Dropdown
        label={timeOption.label}
        className='m-5'
        entries={ timeOptions.map((el)=>[el.label, ()=>setTimeOption(el)]) }
      />z
      <GraphResize bindID={ bindIDRef.current } initializeObj={ initializeObj } className='grow'/>
    </div>
  );
};

export default BarGraph;