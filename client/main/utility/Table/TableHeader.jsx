/**
 * ************************************
 *
 * @module  TableHeader
 * @description .jsx - Used by Table to create headers
 * 
 * ************************************
 */

import React from 'react';

const TableHeader = ({ innerJSX }) => {
  return (
    <th scope="col" className="px-6 py-3">
      { innerJSX }
    </th>
  );
};

export default TableHeader;