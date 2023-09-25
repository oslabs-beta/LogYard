/**
 * ************************************
 *
 * @module  Table
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - creates table from relevant inputs
 * 
 * ************************************
 */

import React from 'react';
import TableItem from './TableItem';
import TableHeader from './TableHeader';

//displayHeaders ex: ['h1', 'h2', 'header3']
//displayData ex: [['H1 Data', 'H2 data', 'asdf']]
const Table = ({ displayHeaders, displayData }) => {
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
    <div className="relative my-5 px-5 w-full overflow-y-scroll">
      <table className="w-full h-12 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="w-full text-xs text-gray-50 uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
          <tr>
            { tableHeaders }
          </tr>
        </thead>
        <tbody className='h-full'>
          { tableItems }
        </tbody>
      </table>
    </div>
  );
};

export default Table;