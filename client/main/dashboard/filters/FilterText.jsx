import React from 'react';
import { store } from '../../../state/store/store';
import applyFilter from '../../../state/filtering/applyFilter';
import { setFilteredLogs } from '../../../state/actions/actions';
import InputBar, { ButtonInput, TextInput} from '../../utility/InputBar/InputBar';
import { useDispatch } from 'react-redux';


const applyFilterClicked = (filterString, dispatch, setFilterErrors) => {
  //Apply Filter to all logs. Using store to avoid re-rendering with use selector
  let filteredLogs = store.getState().logsReducer.logs;
  try {
    const filterMetadata = {};
    filteredLogs = applyFilter(filteredLogs, filterString, filterMetadata);

    //Return issues
    setFilterErrors(filterMetadata.errors);
  }
  catch (e) {
    setFilterErrors(['User filter caused an error']);
  }
  finally {
    //Dispatch set all filters
    dispatch(setFilteredLogs(filteredLogs));
  }
};

const FilterText = ({filterText, setFilterText, setFilterErrors}) => {
  const dispatch = useDispatch();

  return (
    <InputBar className={'grow'}>
      <TextInput 
        value={filterText} 
        onChange={(e)=>{setFilterText(e.target.value);}} 
        placeholder='Filter Text' 
        className='grow'
      />
      <ButtonInput 
        onClick={() => {
          setFilterText('');
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