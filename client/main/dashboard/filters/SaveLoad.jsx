/**
 * ************************************
 *
 * @module  SaveLoad
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - Used for Saving, Loading, and deleting from user data
 * 
 * ************************************
 */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../../state/actions/actions';
import applyFilter from '../../../state/filtering/applyFilter';
import InputBar, { Dropdown, ButtonInput, TextInput} from '../../utility/InputBar/InputBar';

const validateFilter = (filterString)=>{
  try {
    const filterMetaData = {};
    
    applyFilter([], filterString, filterMetaData);

    return filterMetaData.errors.length === 0;
  }
  catch (e){
    return false;
  }
};

const saveFilterClicked = async (filterName, filterString, dispatch) => {
  if (!validateFilter(filterString)) return alert('Fix all errors before saving filter');
  
  const result = await fetch('/api/profile/filter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filterName, filterString } ),
  });
  
  if (result.ok){
    const body = await result.json();
    dispatch(setUserData(body));
  }
};

const loadFilterClicked = async (filterName, filterString, setFilterName, setFilterText)=>{
  setFilterName(filterName);
  setFilterText(filterString);
};

const deleteFilterClicked = async (filterName, dispatch)=>{
  const result = await fetch('/api/profile/filter', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filterName } ),
  });
  const body = await result.json();
  
  if (result.ok){
    dispatch(setUserData(body));
  }
};

const SaveLoad = ({ setFilterText, filterText }) => {
  const dropdownOptions = [];
  const [filterName, setFilterName] = useState('');
  const dispatch = useDispatch();

  const filters = useSelector((state)=>state.userReducer.userData.savedFilters);

  if (filters) {
    for (const [key, value] of Object.entries(filters)){
      dropdownOptions.push([
        key,
        ()=>loadFilterClicked(key, value, setFilterName, setFilterText)
      ]);
    }
  }

  return (
    <InputBar className={'mr-5'}>
      <Dropdown label='Load' className='' entries={ dropdownOptions }/>
      <TextInput value={ filterName } onChange={(e)=>setFilterName(e.target.value)} placeholder='Filter Name'/>
      <ButtonInput label='Save' onClick={()=>saveFilterClicked(filterName, filterText, dispatch)}/>
      <ButtonInput label='Delete' onClick={()=>deleteFilterClicked(filterName, dispatch)}/>
    </InputBar>
  );
};

export default SaveLoad;