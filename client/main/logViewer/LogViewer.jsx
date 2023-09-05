import React from 'react';
import { useSelector } from 'react-redux';

const LogViewer = () => {

  // const log = useSelector(state=>state.logsReducer.activeLog);
  
  const log = {
    id: 5,
    context: 'Pod 2',
    time: '6:30',
    data: 'Err 404 Page not found'
  };

  return (
    <div className='container'>
      <div className='logHeader flex items-center space-x-4 border-2 border-black'>
        <h1>ID: {log.id} </h1>
        <h1>Context: {log.context} </h1>
        <h1>Time: {log.time} </h1>
      </div>
      <div className='min-h-screen flex justify-center'>
        <a href="#" className="mx-auto block w-100 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{log.data}</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </a>
      </div>
     
    </div>
  );
};

export default LogViewer;
