/**
 * ************************************
 *
 * @module  LogViewer
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - Display data related to an individual log
 * 
 * ************************************
 */

import React from 'react';
import { useSelector } from 'react-redux';

const LogViewer = () => {

  const log = useSelector( state => state.logsReducer.activeLog );

  const { _id, timestamp, meta, message, level} = log;

  const { Context } = meta;

  const date = new Date(Date.parse(timestamp)).toLocaleDateString();

  const time = new Date(Date.parse(timestamp)).toLocaleTimeString();

  return (
    <>
      <div className='bg-gray-700 rounded-lg text-white m-6 shadow-2xl'>
        <section id='pageTitle' className='text-center'>
          <h1 className='text-6xl my-12'>Log Inspection</h1>
        </section>

        <section className='text-center mt-5 mb-10'>
          <div className='border m-5 p-5 rounded-lg shadow-lg'>
            <div className='text-4xl font-light'>Date: </div>
            <div className='text-2xl mt-5'>{date} at {time}</div>
          </div>
          <div className='border m-5 p-5 rounded-lg shadow-lg'>
            <div className='text-4xl font-light'>Level: </div>
            <div className='text-2xl mt-5'>{level}</div>
          </div>
          <div className='border m-5 p-5 rounded-lg shadow-lg'>
            <div className='text-4xl font-light'>Message: </div>
            <div className='text-2xl mt-5'>{message}</div>
          </div>
          <div className='border m-5 p-5 rounded-lg shadow-lg'>
            <div className='text-4xl font-light'>Context: </div> 
            {
              Object.entries(Context).map(([key, value])=>{
                return <div className='text-2xl mt-5' key={key}> {key}: {value}<br></br></div>; 
              })
            }
          </div>
        </section>
      </div>
    </>
  );
};

export default LogViewer;
