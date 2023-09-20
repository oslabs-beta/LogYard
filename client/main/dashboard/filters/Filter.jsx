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
import InputBar, {Dropdown, ButtonInput, TextInput} from '../../utility/InputBar/InputBar';
import { filterLogs, setUserData,  } from '../../../state/actions/actions';
import { useSelector, useDispatch } from 'react-redux';

const saveFilterClicked = async (filterName, filterString, dispatch) => {
  //Upserts to DB and reassigns filter
  const result = await fetch('/api/profile/filter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filterName, filterString } ),
  });
  const body = await result.json();

  //Dispatch to state from result if OK
  if (result.ok){
    dispatch(setUserData(body));
  }
};

const loadFilterClicked = async (filterName, filterString, setFilterName, setFilterText)=>{
  //Loads from State
  setFilterName(filterName);
  setFilterText(filterString);
};

const deleteFilterClicked = async (filterName, dispatch)=>{
  //Deletes from DB and reassigns filter
  //Upserts to DB and reassigns filter
  const result = await fetch('/api/profile/filter', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filterName } ),
  });
  const body = await result.json();
  
  //Dispatch to state from result if OK
  if (result.ok){
    dispatch(setUserData(body));
  }
};

const Filter = (props)=>{
  const [filterText, setFilterText] = useState('');
  const [filterName, setFilterName] = useState('');
  const [filterValid, setFilterValid] = useState(false);
  const dispatch = useDispatch();

  const onFilterClicked = (e) => {
    dispatch(filterLogs(filterText));
  };

  const dropdownOptions = [];
  const filters = useSelector((state)=>state.userReducer.userData.savedFilters);

  if (filters){
    for (const [key, value] of Object.entries(filters)){
      dropdownOptions.push([
        key,
        ()=>loadFilterClicked(key, value, setFilterName, setFilterText)
      ]);
    }
  }


  return (
    <div>
      <div className='flex flex-row pt-5 px-5'>
        {/* Save, Load And Delete */}
        <InputBar className={'mr-5'}>
          <Dropdown label='Load' className='' entries={ dropdownOptions }/>
          <TextInput value={filterName} onChange={(e)=>setFilterName(e.target.value)} placeholder='Filter Name'/>
          <ButtonInput label='Save' onClick={()=>saveFilterClicked(filterName, filterText, dispatch)}/>
          <ButtonInput label='Delete' onClick={()=>deleteFilterClicked(filterName, dispatch)}/>
        </InputBar>
        {/* Actual Filter String */}
        <InputBar className={'grow'}>
          <TextInput value={filterText} onChange={(e)=>{setFilterText(e.target.value);}} placeholder='Filter Text' className='grow'/>
          <ButtonInput onClick={onFilterClicked} label='Apply Filter'/>
        </InputBar>
      </div>
      <div className='flex justify-center'>
        {filterValid && <h1 className='text-gray-50 italic'>Invalid Filter: Please Reference Tooltip</h1>}
      </div>
    </div>
  );
};

export default Filter;