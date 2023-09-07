/**
 * ************************************
 *
 * @module  AllLogs
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - creates table for dashboard
 * 
 * ************************************
 */

import React from 'react';
import { useSelector } from 'react-redux';
import LogDisplay from './LogDisplay';



const AllLogs = () => {

  // get data from state
  const allLogs = useSelector(state=>state.logsReducer.logs);

  const logComponents = [];

  // create the array of logs for dashboard display
  for (const log of allLogs){
    logComponents.push(<LogDisplay key={Math.random()} data={ log } />);
  }

  return (
    <>
      <div className="p-5 w-full relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {/* dashboard table header */}
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
            {/* dashboard table components */}
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