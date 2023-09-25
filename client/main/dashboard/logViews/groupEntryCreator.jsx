/**
 * ************************************
 *
 * @module  groupEntryCreator
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - Used to display a data group of logs in a Table
 * 
 * ************************************
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilteredLogs } from '../../../state/actions/actions';

const TextEntry = ({ input }) => (<> {input} </>);

const InspectEntry = ({ groupKey }) => {
  const dispatch = useDispatch();
  const localLogs = useSelector(state=>state.logsReducer.filteredLogs[groupKey]);

  return (
    <button onClick={()=>{
      dispatch(setFilteredLogs(localLogs));
    }}>
      <img src='../../5971.png' alt='Inspect' className='w-8 min-w-8 h-w'></img>
    </button>
  );
};

const groupEntryCreator = (key, value) => {
  return [
    <TextEntry key={Math.random()} input={key}/>,
    <TextEntry key={Math.random()} input={value.length}/>,
    <InspectEntry key={Math.random()} groupKey={key}/>,
  ];
};

export default groupEntryCreator;