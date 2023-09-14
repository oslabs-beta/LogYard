/**
 * ************************************
 *
 * @module  TableItem
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - Used by Table to create entries
 * 
 * ************************************
 */

import React from 'react';


// An entry is an array with values as inner HTML
const TableHeader = ({columns}) => {
  const allColumns = [];

  for (const col of columns){
    allColumns.push((
      <th key={Math.random()} scope="row" className="px-6 py-4 font-medium bg-gray-200 border-b border-gray-100 text-gray-900 whitespace-nowrap dark:text-white">
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