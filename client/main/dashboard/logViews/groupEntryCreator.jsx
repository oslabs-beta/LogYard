import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilteredLogs } from '../../../state/actions/actions';

const TextEntry = ({ input }) => (<> {input} </>);

const InspectEntry = ({ groupKey }) => {
  const dispatch = useDispatch();

  return (
    <button onClick={()=>{
      dispatch(setFilteredLogs(groupKey));
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