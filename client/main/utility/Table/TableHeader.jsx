/**
 * ************************************
 *
 * @module  TableHeader
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - Used by Table to create headers
 * 
 * ************************************
 */

import React from 'react';

//displayHeaders is an array with values as columns
//displayData is an array with values as entries
// An entry is an array with values as inner HTML
const TableHeader = ({innerJSX}) => {

  return (
    <th scope="col" className="px-6 py-3">
      {innerJSX}
    </th>
  );
};

export default TableHeader;