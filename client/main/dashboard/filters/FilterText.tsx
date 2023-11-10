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

interface applyFilterClicked {
  (
    filterString: string,
    dispatch: any,
    setFilterErrors: any
  ): void
}

interface filterMetadata {
  errors?: string[];
}

const applyFilterClicked: applyFilterClicked = (filterString, dispatch, setFilterErrors) => {
  let filteredLogs = store.getState().logsReducer.logs;
  try {
    const filterMetadata: filterMetadata = {};
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

interface FilterTextProps {
  filterText: string,
  setFilterText: React.Dispatch<React.SetStateAction<string>>,
  setFilterErrors: React.Dispatch<React.SetStateAction<never[]>>,
  setFilterName: React.Dispatch<React.SetStateAction<string>>,

}

const FilterText: React.FC<FilterTextProps> = ({filterText, setFilterText, setFilterErrors, setFilterName}) => {
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
          setFilterName('');
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