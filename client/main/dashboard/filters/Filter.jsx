/**
 * ************************************
 *
 * @module  Filter
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - Allows the user to filter logs
 * 
 * ************************************
 */

import React, { useState } from 'react';
import SaveLoad from './SaveLoad';
import FilterText from './FilterText';

const Filter = (props)=>{
  const [filterText, setFilterText] = useState('');
  const [filterErrors, setFilterErrors] = useState([]);

  return (
    <div>
      <div className='flex flex-row pt-5 px-5'>
        {/* Save, Load And Delete */}
        <SaveLoad
          filterText = { filterText }
          setFilterText = { setFilterText }
        />
        {/* Actual Filter String */}
        <FilterText 
          filterText = { filterText }
          setFilterText = { setFilterText }
          setFilterErrors = { setFilterErrors }
        />
      </div>
      {
        filterErrors.map((element)=>{
          return (
            <div key={Math.random()} className='flex justify-center'>
              <h1 className='text-gray-50 italic'> { element } </h1>
            </div>
          );
        })
      }
    </div>
  );
};

export default Filter;