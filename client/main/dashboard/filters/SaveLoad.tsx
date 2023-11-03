/**
 * ************************************
 *
 * @module  SaveLoad
 * @description .jsx - Used for Saving, Loading, and deleting from user data
 * 
 * ************************************
 */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../../state/actions/actions';
import applyFilter from '../../../state/filtering/applyFilter';
import InputBar, { Dropdown, ButtonInput, TextInput} from '../../utility/InputBar/InputBar';
import { RootState } from '../../../state/store/store';
import { Dispatch } from '@reduxjs/toolkit';

interface validateFilter {
  (filterString: string): boolean
}

type filterMetaData = {
  errors?: any
}

const validateFilter: validateFilter = (filterString)=>{
  try {
    const filterMetaData: filterMetaData = {};
    
    applyFilter([], filterString, filterMetaData);

    return filterMetaData.errors.length === 0;
  }
  catch (e){
    return false;
  }
};

interface saveFilterClicked {
  (
    filterName:string,
    filterString: string,
    dispatch: Dispatch
    ): void
}

const saveFilterClicked: saveFilterClicked = async (filterName, filterString, dispatch) => {
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

interface loadFilterClicked {
  (
    filterName: string,
    filterString: string,
    setFilterName: React.Dispatch<React.SetStateAction<string>>,
    setFilterText: React.Dispatch<React.SetStateAction<string>>
  ): void
}

const loadFilterClicked: loadFilterClicked = async (filterName, filterString, setFilterName, setFilterText)=>{
  setFilterName(filterName);
  setFilterText(filterString);
};

interface deleteFilterClicked {
  (
    filterName: string,
    dispatch: Dispatch
  ): void
}

const deleteFilterClicked: deleteFilterClicked = async (filterName, dispatch)=>{
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

interface SaveLoadProps {
  filterName?: string
  setFilterName?: React.Dispatch<React.SetStateAction<string>>
  setFilterText: React.Dispatch<React.SetStateAction<string>>,
  filterText: string
}
//setFitlerName, filterName
const SaveLoad: React.FC<SaveLoadProps> = ({ setFilterText, filterText }) => {
  const dropdownOptions = [];
  const [filterName, setFilterName] = useState<string>('');
  const dispatch = useDispatch();

  const filters = useSelector((state: RootState)=>state.userReducer.userData.savedFilters);

  if (filters) {
    for (const [key, value] of Object.entries(filters)){
      dropdownOptions.push([
        key,
        ()=>loadFilterClicked(key, value as string, setFilterName, setFilterText)
      ]);
    }
  }

  return (
    <InputBar className={'mr-5'}>
      <Dropdown label='Load' className='' entries={ dropdownOptions }/>
      <TextInput value={ filterName } className='' onChange={(e)=>setFilterName(e.target.value)} placeholder='Filter Name'/>
      <ButtonInput label='Save' onClick={()=>saveFilterClicked(filterName, filterText, dispatch)}/>
      <ButtonInput label='Delete' onClick={()=>deleteFilterClicked(filterName, dispatch)}/>
    </InputBar>
  );
};

export default SaveLoad;