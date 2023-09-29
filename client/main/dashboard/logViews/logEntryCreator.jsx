/**
 * ************************************
 *
 * @module  logEntryCreator
 * @description .jsx - Used to display an individual log in a Table
 * 
 * ************************************
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setActiveLog, deleteLog } from '../../../state/actions/actions';
import axios from 'axios';

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

const onDeleteClick = async (dispatch, id) => {
  
  const prompt = confirm('Are you sure you want to delete this log?');

  if (prompt) {
    try {
      // delete from state
      dispatch(deleteLog(id));

      // delete from database
      await axios.delete(`/api/logs/delete/${id}`);
    } 
    catch (e) {
      alert('Log could not be deleted.');
      console.log(e);
    }
  }
  return;
};

const DeleteEntry = ({ input }) => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => onDeleteClick(dispatch, input)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="darkgreen" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
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
    <InspectEntry key={_id + '6'} log={ individualLog }/>,
    <DeleteEntry key={_id + '7'} input={_id}/>
  ];
};

export default logEntryCreator;