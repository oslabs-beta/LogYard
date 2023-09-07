/**
 * ************************************
 *
 * @module  Filter
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - filter options component
 * 
 * ************************************
 */

import React, { useState } from 'react';
import FilterDropdown from './FilterDropdown';

const Filter = () => {
  return (
    <div className='flex justify-space-around p-5 pb-0'>
      <FilterDropdown/>
      <div className='grow flex items-stretch items-end'>
        <input type="text" placeholder='Filter name' className="shrink bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-secondary-500 focus:border-secondary-500 block w-64 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary-500 dark:focus:border-secondary-500"/>
        <button type="button" className="text-white bg-secondary-700 hover:bg-secondary-800 focus:ring-4 focus:ring-secondary-300 font-medium text-sm px-5 py-2.5 dark:bg-secondary-600 dark:hover:bg-secondary-700 focus:outline-none dark:focus:ring-secondary-800">
          Update/New
        </button>
        <button type="button" className="text-white bg-secondary-700 hover:bg-secondary-800 focus:ring-4 focus:ring-secondary-300 font-medium rounded-r-lg text-sm px-5 py-2.5 dark:bg-secondary-600 dark:hover:bg-secondary-700 focus:outline-none dark:focus:ring-secondary-800">
          Delete
        </button>
        <input type="text" placeholder='Filter' className="ml-2 grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-secondary-500 focus:border-secondary-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary-500 dark:focus:border-secondary-500"/>
        <button type="button" className="text-white bg-secondary-700 hover:bg-secondary-800 focus:ring-4 focus:ring-secondary-300 font-medium rounded-r-lg text-sm px-5 py-2.5 dark:bg-secondary-600 dark:hover:bg-secondary-700 focus:outline-none dark:focus:ring-secondary-800">
          Run
        </button>
      </div>
    </div>
  );
};

export default Filter;