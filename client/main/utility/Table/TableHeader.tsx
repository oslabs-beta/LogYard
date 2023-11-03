/**
 * ************************************
 *
 * @module  TableHeader
 * @description .jsx - Used by Table to create headers
 * 
 * ************************************
 */

import React, { ReactNode } from 'react';

interface TableHeaderProps {
  innerJSX: string
}

const TableHeader: React.FC<TableHeaderProps> = ({ innerJSX }) => {
  return (
    <th scope="col" className="px-6 py-3">
      { innerJSX }
    </th>
  );
};

export default TableHeader;