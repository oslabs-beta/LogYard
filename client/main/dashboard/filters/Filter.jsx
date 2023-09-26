/**
 * ************************************
 *
 * @module  Filter
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - A bar that allows CRUD for user filters
 * 
 * ************************************
 */

import React, { useState } from 'react';
import FilterText from './FilterText';
import SaveLoad from './SaveLoad';
import ModalIcon from '../../utility/InputBar/ModalIcon.jsx';

const Filter = ()=>{
  const [filterText, setFilterText] = useState('');
  const [filterErrors, setFilterErrors] = useState([]);

  return (
    <div>
      <div className='flex flex-row pt-5 px-5'>
        <SaveLoad filterText = { filterText } setFilterText = { setFilterText } />

        <ModalIcon />
        
        <FilterText filterText = { filterText } setFilterText = { setFilterText } setFilterErrors = { setFilterErrors }/>
      </div>
      { filterErrors.map((element)=>
        <div key={Math.random()} className='flex justify-center'>
          <h1 className='text-gray-50 italic'> { element } </h1>
        </div> ) }
    </div>
  );
};

export default Filter;