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

  return (
    <button onClick={()=>onInspectEntry(dispatch, navigate, log)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="darkgreen" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </button>
  );
};

const logEntryCreator = (individualLog) => {
  const { timestamp, level, meta, message, _id } = individualLog;
  const { Context } = meta;

  const logTime = new Date(timestamp);

  return [
    <TextEntry key={_id + '1'} input={[logTime.toLocaleTimeString(), <br key={ Math.random() } />, logTime.toLocaleDateString()]}/>,
    <TextEntry key={_id + '2'} input={_id}/>,
    <TextEntry key={_id + '3'} input={level}/>,
    <TextEntry key={_id + '4'} input={message}/>,
    <ContextEntry key={_id + '5'} contexts={Context}/>,
    <InspectEntry key={_id + '6'} log={ individualLog } className='w-16'/>
  ];
};

export default logEntryCreator;