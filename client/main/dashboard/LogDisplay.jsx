/**
 * ************************************
 *
 * @module  LogDisplay
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - each individual log component on dashboard
 * 
 * ************************************
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setActiveLog } from '../../state/actions/actions';

// set the active log in state to current log object
const getLogID = (dispatch, data) => {
  dispatch(setActiveLog(data));
};

const LogDisplay = ({ data })=>{

  // destructure from data params - which is used in AllLogs.jsx
  const { Time, level, meta, message, _id } = data;
  // get items from data.meta
  const { Context, LogString } = meta;

  // initialize dispatch
  const dispatch = useDispatch();
  // initialize navigation
  const navigate = useNavigate();

  // get specific log from state
  const log = useSelector( state => state.logsReducer.activeLog );


  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {Time}
      </th>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {_id}
      </th>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {level}
      </th>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {message}
      </th>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {/* list of contexts */}
        {
          Object.entries(Context).map(([key, value])=>{
            return <React.Fragment key={key}> {key}: {value}<br></br></React.Fragment>; 
          })
        }
      </th>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

        <button onClick={()=>{
          // upon clicking the magnifying glass, set the current log object in state
          getLogID(dispatch, data);
          // then navigate to individual log viewer
          navigate('/main/logviewer');
        }}>
          {/* magnifying class photo */}
          <img src='../../5971.png' alt='Inspect' className='w-8 min-w-8 h-w'></img>
        </button>
      </th>
    </tr>
  );
};

export default LogDisplay;