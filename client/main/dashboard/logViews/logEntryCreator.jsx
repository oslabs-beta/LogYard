/**
 * ************************************
 *
 * @module  logEntryCreator
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - Used to display an individual log in a Table
 * 
 * ************************************
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setActiveLog } from '../../../state/actions/actions';

// set the active log in state to current log object
const onInspectEntry = (dispatch, navigate, data) => {
  navigate('/main/logviewer');
  dispatch(setActiveLog(data));
};

const TextEntry = ({ input }) => (<> {input} </>);

const ContextEntry = ({ contexts }) => (
  <>
    {
      Object.entries(contexts).map(([key, value])=>{
        return <React.Fragment key={key}> {key}: {value}<br></br></React.Fragment>; 
      })
    }
  </>
);

const InspectEntry = ({ log }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // updates 'current log' in store to properly render inspect page upon click
  return (
    <button onClick={()=>onInspectEntry(dispatch, navigate, log)}>
      <img src='/5971.png' alt='Inspect' className='w-8 min-w-8 h-w'></img>
    </button>
  );
};

const logEntryCreator = (data) => {

  // destructure from data params - which is called in AllLogs.jsx
  const { timestamp, level, meta, message, _id } = data;
  // get items from data.meta
  const { Context } = meta;

  const logTime = new Date(timestamp);

  return [
    <TextEntry key={_id + '1'} input={logTime.toLocaleTimeString()}/>,
    <TextEntry key={_id + '2'} input={_id}/>,
    <TextEntry key={_id + '3'} input={level}/>,
    <TextEntry key={_id + '4'} input={message}/>,
    <ContextEntry key={_id + '5'} contexts={Context}/>,
    <InspectEntry key={_id + '6'} log={ data }/>
  ];
};

export default logEntryCreator;