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
import groupEntryCreator from './groupEntryCreator';
import Table from '../../utility/Table/Table';


//Display Data is an object with with keys as columns and values as arrays of data (expected square)
const AllLogs = () => {
  // get data from state
  const allLogs = useSelector(state=>state.logsReducer.filteredLogs);
  
  const tableEntries = [];
  const tableHeaders = [];

  // create the array of logs for dashboard display
  if (Array.isArray(allLogs)){
    tableHeaders.push('Time');
    tableHeaders.push('ID');
    tableHeaders.push('Level');
    tableHeaders.push('Message');
    tableHeaders.push('Context');
    tableHeaders.push('Inspect');

    let i = 0;
    for (const log of allLogs) {
      if (i > 100) break;
      tableEntries.unshift(logEntryCreator(log));
      i++;
    }
  }
  else {
    tableHeaders.push('Key');
    tableHeaders.push('Count');
    tableHeaders.push('Inspect');

    for (const [key, value] of Object.entries(allLogs)){
      tableEntries.unshift(groupEntryCreator(key, value));
    }
  }
  
  return (
    <Table displayHeaders={tableHeaders} displayData={ tableEntries }/>
  );
};

export default AllLogs;