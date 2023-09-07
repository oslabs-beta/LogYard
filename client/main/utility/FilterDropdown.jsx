/**
 * ************************************
 *
 * @module  FilterDropdown
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - description goes here...
 * 
 * ************************************
 */

import React, { useState } from 'react';
import FilterDropdownItem from './FilterDropdownItem';

const FilterDropdown = () => {
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };
  
  return (
    <button onClick={handleDropDown} className='rounded-l-lg relative text-white bg-secondary-700 hover:bg-secondary-800 focus:ring-4 focus:outline-none focus:ring-secondary-300 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800' type="button">
        Load Filter
      <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
      </svg>
      <div className={`absolute top-full left-0 z-10 ${isOpen ? 'block' : 'hidden' } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <FilterDropdownItem/>
          <FilterDropdownItem/>
          <FilterDropdownItem/>
        </ul>
      </div>
    </button>
  );
};

export default FilterDropdown;