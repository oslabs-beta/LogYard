import React, { useState } from 'react';
import InputBar, { Dropdown, ButtonInput, TextInput} from '../../utility/InputBar/InputBar';
import { setUserData } from '../../../state/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import applyFilter from '../../../state/filtering/applyFilter';

const validateFilter = (filterString)=>{
  try {
    const metaData = {};
    
    applyFilter([], filterString, metaData);

    return metaData.errors.length === 0;
  }
  catch (e){
    return false;
  }
};

const saveFilterClicked = async (filterName, filterString, dispatch) => {
  if (!validateFilter(filterString)) return alert('Fix all errors before saving filter');

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