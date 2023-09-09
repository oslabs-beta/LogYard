/**
 * ************************************
 *
 * @module  AllLogs
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - creates table for dashboard
 * 
 * ************************************
 */

import React from 'react';
import { useSelector } from 'react-redux';
import logEntryCreator from './logEntryCreator';
import Table from '../../utility/Table/Table';


//Display Data is an object with with keys as columns and values as arrays of data (expected square)
const AllLogs = ({displayData}) => {

  // get data from state
  const allLogs = useSelector(state=>state.logsReducer.logs);
  const tableEntries = [];

  // create the array of logs for dashboard display
  for (const log of allLogs){
    tableEntries.push(logEntryCreator(log));
  }

  return (
    <Table displayHeaders={[
      'Time',
      'ID',
      'Level',
      'Message',
      'Context',
      'Inspect'
    ]} displayData={ tableEntries }/>
  );
};

export default AllLogs;