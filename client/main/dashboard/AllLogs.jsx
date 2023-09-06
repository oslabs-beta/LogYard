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
    <>
      <div className="p-5 w-full relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Level
              </th>
              <th scope="col" className="px-6 py-3">
                Message
              </th>
              <th scope="col" className="px-6 py-3">
                Context
              </th>
              <th scope="col" className="px-6 py-3">
                Inspect
              </th>
            </tr>
          </thead>
          <tbody>
            {logComponents}
          </tbody>
        </table>
      </div>

      {/* <div className='flex grow flex-col max-h-full max-w-full overflow-y-scroll'>
        
      </div> */}
    </>
  );
};

export default AllLogs;