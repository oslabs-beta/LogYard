/**
 * ************************************
 *
 * @module  groupEntryCreator
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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="darkgreen" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
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