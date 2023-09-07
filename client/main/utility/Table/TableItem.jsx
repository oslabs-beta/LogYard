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

//displayHeaders is an array with values as columns
//displayData is an array with values as entries
// An entry is an array with values as inner HTML
const TableHeader = ({columns}) => {
  const allColumns = [];

  for (const col of columns){
    allColumns.push((
      <th key={Math.random()} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        { col }
      </th>
    ));
  }

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      {allColumns}
    </tr>
  );
};

export default TableHeader;