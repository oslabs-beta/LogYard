/**
 * ************************************
 *
 * @module  Filter Text
 * @description .jsx - Used for creating and applying filters
 * 
 * ************************************
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilteredLogs } from '../../../state/actions/actions';
import { store } from '../../../state/store/store';
import applyFilter from '../../../state/filtering/applyFilter';
import InputBar, { ButtonInput, TextInput} from '../../utility/InputBar/InputBar';


const applyFilterClicked = (filterString, dispatch, setFilterErrors) => {
  let filteredLogs = store.getState().logsReducer.logs;
  try {
    const filterMetadata = {};
    filteredLogs = applyFilter(filteredLogs, filterString, filterMetadata);

    setFilterErrors(filterMetadata.errors);
  }
  catch (e) {
    setFilterErrors(['User filter caused an error']);
  }
  finally {
    dispatch(setFilteredLogs(filteredLogs));
  }
};

const FilterText = ({filterText, setFilterText, setFilterErrors, setfilterName}) => {
  const dispatch = useDispatch();

  return (
    <InputBar className={'grow'}>
      <TextInput 
        value={filterText}
        id='Filter Text' 
        onChange={(e)=>{setFilterText(e.target.value);}} 
        placeholder='Filter Text' 
        className='grow'
      />
      <ButtonInput 
        onClick={() => {
          setFilterText('');
          setfilterName('');
          applyFilterClicked('', dispatch, setFilterErrors);
        }}
        label='Clear Filter' 
      />
      <ButtonInput 
        onClick={()=>applyFilterClicked(filterText, dispatch, setFilterErrors)} 
        label='Apply Filter'
      />
    </InputBar>
  );
};

export default FilterText;