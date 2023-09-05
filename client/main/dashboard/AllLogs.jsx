import React from 'react';
import { useSelector } from 'react-redux';
import LogDisplay from './LogDisplay';



const AllLogs = () => {
  //Get Data From Selector
  const allLogs = useSelector(state=>state.logsReducer.logs);

  const logComponents = [];

  for (const log of allLogs){
    logComponents.push(<LogDisplay key={Math.random()} data={ log } />);
  }

  return (
    <div className='flex grow flex-col max-h-full overflow-y-scroll'>
      {logComponents}
    </div>
  );
};

export default AllLogs;