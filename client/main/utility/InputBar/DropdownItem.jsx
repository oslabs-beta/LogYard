/**
 * ************************************
 *
 * @module  DropdownInputItem
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - An item of a dropdown associated with inputbar dropdown
 * 
 * ************************************
 */

import React from 'react';

const DropdownItem = ({ label, onClickFunc })=>{
  return (
    <li>
      <a onClick={ onClickFunc } className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{ label }</a>
    </li>
  );
};

export default DropdownItem;