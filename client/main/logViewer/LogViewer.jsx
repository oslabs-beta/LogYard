/**
 * ************************************
 *
 * @module  LogViewer
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - individual log component page
 * 
 * ************************************
 */

import React from 'react';
import { useSelector } from 'react-redux';

const LogViewer = () => {

  // get individual log from state
  const log = useSelector( state => state.logsReducer.activeLog );

  // get data from individual log
  const { _id, timestamp, meta, message, level} = log;

  // get items from log.meta
  const { Context, LogString} = meta;

  return (
    <div className='mx-10 my-10'>
      <div className='flex  justify-center items-center space-x-4 p-4 bg-gray-50 border-b border-gray-900 text-gray-900 whitespace-nowrap'>
        <h1 className='text-xl font-bold'>ID: </h1><h2 className=''>{_id}</h2>
        <h1 className='text-xl font-bold'>Time: </h1><h2 className=''>{timestamp}</h2>
        <h1 className='text-xl font-bold'>Level: </h1><h2 className=''>{level}</h2>
      </div>
      <div className='min-h-full flex flex-col justify-center items-center mx-auto block w-full p-6 border border-gray-200 shadow bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{message}</h5>
        <div>
          {/* list of contexts */}
          {
            Object.entries(Context).map(([key, value])=>{
              return <React.Fragment key={key}> {key}: {value}<br></br></React.Fragment>; 
            })
          }
        </div>
      </div>
    </div>
  );
};

export default LogViewer;
