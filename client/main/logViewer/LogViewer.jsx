import React from 'react';
import { useSelector } from 'react-redux';

const LogViewer = () => {

  const log = useSelector(state=>state.logsReducer.activeLog);
  const { _id, Time, meta, message, level} = log;
  const { Context, LogString} = meta;

  return (
    <div className='container'>
      <div className='logHeader flex items-center space-x-4 border-2 border-black'>
        <h1>ID: {_id} </h1>
        <h1>Time: {Time} </h1>
        <h1>Level: {level} </h1>
      </div>
      <div className='min-h-full flex justify-center'>
        <a href="#" className="mx-auto block w-100 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{message}</h5>
          {/* <p className="font-normal text-gray-700 dark:text-gray-400"> */}
          <div>
            {
              Object.entries(Context).map(([key, value])=>{
                return <React.Fragment key={key}> {key}: {value}<br></br></React.Fragment>; 
              })
            }
          </div>
        </a>
      </div>
     
    </div>
  );
};

export default LogViewer;
