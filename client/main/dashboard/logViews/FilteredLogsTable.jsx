/**
 * ************************************
 *
 * @module  FilteredLogsTable
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - Creates a table from current logs and filters
 * 
 * ************************************
 */

import React from 'react';
import { useSelector } from 'react-redux';
import logEntryCreator from './logEntryCreator';
import groupEntryCreator from './groupEntryCreator';
import Table from '../../utility/Table/Table';

const FilteredLogsTable = () => {
  const filteredLogs = useSelector(state=>state.logsReducer.filteredLogs);
  
  const tableEntries = [];
  const tableHeaders = [];

  if (Array.isArray(filteredLogs)){
    tableHeaders.push('Time');
    tableHeaders.push('ID');
    tableHeaders.push('Level');
    tableHeaders.push('Message');
    tableHeaders.push('Context');
    tableHeaders.push('Inspect');

    const startingIndex = Math.max(0, filteredLogs.length - 101);

    for (let i = startingIndex; i <  filteredLogs.length ; i++){
      tableEntries.unshift(logEntryCreator(filteredLogs[i]));
    }
  }
  else {
    tableHeaders.push('Key');
    tableHeaders.push('Count');
    tableHeaders.push('Inspect');

    for (const [key, value] of Object.entries(filteredLogs)) {
      tableEntries.unshift(groupEntryCreator(key, value));
    }
  }
  
  return (
    <Table displayHeaders={ tableHeaders } displayData={ tableEntries }/>
  );
};

export default FilteredLogsTable;