/**
 * ************************************
 *
 * @module  AllLogs
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - creates table from relevant inputs
 * 
 * ************************************
 */

import React from 'react';
import TableItem from './TableItem';
import TableHeader from './TableHeader';


//displayHeaders is an array with values as columns
//displayData is an array with values as entries
// An entry is an array with values as inner HTML
const Table = ({displayHeaders, displayData}) => {
  const tableHeaders = [];
  const tableItems = [];

  // create the array of logs for dashboard display
  for (const header of displayHeaders){
    tableHeaders.push(<TableHeader key={Math.random()} innerJSX={ header }/>);
  }

  for (const entry of displayData){
    tableItems.push(<TableItem key={Math.random()} columns={entry}/>);
  }

  return (
    <div className="p-5 w-full relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            { tableHeaders }
          </tr>
        </thead>
        <tbody>
          { tableItems }
        </tbody>
      </table>
    </div>
  );
};

export default Table;