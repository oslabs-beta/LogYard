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
import InputBar, {
  Dropdown,
  ButtonInput,
  TextInput,
} from '../../utility/InputBar/InputBar';
import { Dispatch } from 'redux';
import {
  Filter,
  FilterMetaData,
  SaveLoadProps,
  SetFilterName,
  SetFilterText,
} from './types';
import { RootState } from '../../../state/store/store';

const validateFilter = (filterString: string): boolean => {
  try {
    const filterMetaData: FilterMetaData = {
      errors: [],
      success: false,
    };

    applyFilter([], filterString, filterMetaData);

    return filterMetaData.errors.length === 0;
  } catch (e) {
    return false;
  }
};

const saveFilterClicked = async (
  filterName: string,
  filterString: string,
  dispatch: Dispatch<any>
) => {
  if (!validateFilter(filterString))
    return alert('Fix all errors before saving filter');

  const result = await fetch('/api/profile/filter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filterName, filterString }),
  });

  if (result.ok) {
    const body = await result.json();
    dispatch(setUserData(body));
  }
};

const loadFilterClicked = async (
  filterName: string,
  filterString: string,
  setFilterName: SetFilterName,
  setFilterText: SetFilterText
) => {
  setFilterName(filterName);
  setFilterText(filterString);
};

const deleteFilterClicked = async (
  filterName: string,
  dispatch: Dispatch<any>
) => {
  const result = await fetch('/api/profile/filter', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filterName }),
  });
  const body = await result.json();

  if (result.ok) {
    dispatch(setUserData(body));
  }
};

const SaveLoad = ({ setFilterText, filterText }: SaveLoadProps) => {
  const dropdownOptions: Array<[string, () => void]> = [];
  const [filterName, setFilterName] = useState<string>('');
  const dispatch = useDispatch();

  const filters: Filter = useSelector(
    (state: RootState) => state.userReducer.userData.savedFilters
  );

  if (filters) {
    for (const [key, value] of Object.entries(filters)) {
      dropdownOptions.push([
        key,
        () => loadFilterClicked(key, value, setFilterName, setFilterText),
      ]);
    }
  }

  return (
    <InputBar className={'mr-5'}>
      <Dropdown label='Load' className='' entries={dropdownOptions} />
      <TextInput
        value={filterName}
        type='text'
        onChange={(e) => setFilterName(e.target.value)}
        placeholder='Filter Name'
        className=''
      />
      <ButtonInput
        label='Save'
        onClick={() => saveFilterClicked(filterName, filterText, dispatch)}
        className=''
      />
      <ButtonInput
        label='Delete'
        onClick={() => deleteFilterClicked(filterName, dispatch)}
        className=''
      />
    </InputBar>
  );
};

export default SaveLoad;
