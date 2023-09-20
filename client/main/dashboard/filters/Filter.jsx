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

import ModalIcon from '../../utility/InputBar/ModalIcon.jsx';
import ModalMessage from '../../utility/InputBar/ModalMessage';

const saveFilterClicked = async (filterName, filterString, dispatch) => {
  // Upserts to DB and reassigns filter
  const result = await fetch('/api/profile/filter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filterName, filterString } ),
  });
  const body = await result.json();

  // Dispatch to state from result if OK
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
  // filter text state input
  const [filterText, setFilterText] = useState('');
  // filter name state input
  const [filterName, setFilterName] = useState('');
  const [filterValid, setFilterValid] = useState(false);

  // initialize dispatch
  const dispatch = useDispatch();

  // dispatch click function for applying filtering on logs
  const onFilterClicked = () => {
    dispatch(filterLogs(filterText));
  };

  // set local input text state to empty
  const onClearClicked = () => {
    setFilterText('');
  };

  // array for saved filters
  const dropdownOptions = [];

  // grab store variable for all user's filtered logs
  const filters = useSelector((state)=>state.userReducer.userData.savedFilters);

  // load filters for dropdown menu
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
        
        <ModalIcon />
        {/* Actual Filter String */}
        <InputBar className={'grow'}>
          <TextInput value={filterText} onChange={(e)=>{setFilterText(e.target.value);}} placeholder='Filter Text' className='grow'/>
          <ButtonInput onClick={onClearClicked} label='Clear Filter' />
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