/**
 * ************************************
 *
 * @module  DropdownInputItem
 * @description .jsx - An item of a dropdown associated with inputbar dropdown
 * 
 * ************************************
 */

import React from 'react';

interface DropDownItemProps {
 label: string
 onClickFunc: () => void
}

const DropdownItem: React.FC<DropDownItemProps> = ({ label, onClickFunc })=>{
  return (
    <li>
      <a onClick={ onClickFunc } className="block px-4 py-2 bg-tan hover:bg-custom-darkgreen hover:text-custom-tan">{ label }</a>
    </li>
  );
};

export default DropdownItem;