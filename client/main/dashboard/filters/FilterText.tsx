/**
 * ************************************
 *
 * @module  Filter Text
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - Used for creating and applying filters
 * 
 * ************************************
 */

import { useDispatch } from 'react-redux';
import { setFilteredLogs } from '../../../state/actions/actions';
import { store } from '../../../state/store/store';
import applyFilter from '../../../state/filtering/applyFilter';
import InputBar, { ButtonInput, TextInput} from '../../utility/InputBar/InputBar';
import { Dispatch } from 'redux';
import { FilterMetaData, FilterTextProps, SetFilterErrors } from './types';

const applyFilterClicked = (filterString: string, dispatch: Dispatch<any>, setFilterErrors: SetFilterErrors) => {
  let filteredLogs = store.getState().logsReducer.logs;
  try {
    const filterMetadata: FilterMetaData = 
      { errors: [], success: false};
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

const FilterText = ({filterText, setFilterText, setFilterErrors, setFilterName}: FilterTextProps) => {
  const dispatch = useDispatch();

  return (
    <InputBar className={'grow'}>
      <TextInput 
        value={filterText}
        type='text'
        onChange={(e)=>{setFilterText(e.target.value);}} 
        placeholder='Filter Text' 
        className='grow'
      />
      <ButtonInput 
        className=''
        onClick={() => {
          setFilterText('');
          setFilterName('');
          applyFilterClicked('', dispatch, setFilterErrors);
        }}
        label='Clear Filter' 
      />
      <ButtonInput
        className=''
        onClick={()=>applyFilterClicked(filterText, dispatch, setFilterErrors)} 
        label='Apply Filter'
      />
    </InputBar>
  );
};

export default FilterText;