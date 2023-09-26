/**
 * ************************************
 *
 * @module  ModalMessage
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - A modal that displays proper filter strings
 * 
 * ************************************
 */

// eslint modifier for example scripts in modal
/* eslint-disable react/no-unescaped-entities */

import React, { useState } from 'react';

const ModalMessage = ({ onClose }) => {

  return ( 
    <div className={'absolute z-10 flex justify-center items-center mt-3'}>
      <div className='bg-gray-700 text-gray-100 p-2 rounded border-4 border-black'>

        <div className='w-full flex space-x-64'>
          <p>*Note: filter arguments must use double quotes</p>
          {/* <button className='text-gray-50 bg-logo-300 w-16' onClick={onClose}>Close</button> */}

          <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>


        </div>
        

        <section className='p-3'>
          <header className='text-lg font-bold underline underline-offset-2'>HAS:</header>
          <p>
            <span className='font-semibold pl-4'>Description: </span> 
					Shows any and all logs with specified content.
          </p>
          <p>
            <span className='font-semibold pl-4'>Example: </span> 
					HAS(LEVEL("info"))
          </p>
        </section>

        <section className='p-3'>
          <header className='text-lg font-bold underline underline-offset-2'>NOT:</header>
          <p>
            <span className='font-semibold pl-4'>Description: </span> 
					Shows all logs that do not contain given parameter.
          </p>
          <p>
            <span className='font-semibold pl-4'>Example: </span> 
					NOT(LEVEL("error"))
          </p>
        </section>

        <section className='p-3'>
          <header className='text-lg font-bold underline underline-offset-2'>HASANY:</header>
          <p>
            <span className='font-semibold pl-4'>Description: </span> 
					Shows all logs that include one or more declared parameters.
          </p>
          <p>
            <span className='font-semibold pl-4'>Example: </span> 
          HASANY(LEVEL("info") LEVEL("error"))
          </p>
        </section>

        <section className='p-3'>
          <header className='text-lg font-bold underline underline-offset-2'>NOTANY:</header>
          <p>
            <span className='font-semibold pl-4'>Description: </span> 
					Shows all logs that do not have the declared parameters.
          </p>
          <p>
            <span className='font-semibold pl-4'>Example: </span> 
          NOTANY(LEVEL("debug") LEVEL("silly"))
          </p>
        </section>

        <section className='p-3'>
          <header className='text-lg font-bold underline underline-offset-2'>GROUP:</header>
          <p>
            <span className='font-semibold pl-4'>Description: </span> 
					Used to group logs based on a specified set of parameters
          </p>
          <p>
            <span className='font-semibold pl-4'>Example: </span> 
					GROUP(LEVEL())
          </p>
        </section>

        <section className='p-3'>
          <header className='text-lg font-bold underline underline-offset-2'>Combinations:</header>
          <p>
            <span className='font-semibold pl-4'>Example: </span> 
          HAS(LEVEL("info") CONTEXT("server")) GROUP(CONTEXT("router" ""))
          </p>
          <p>
            <span className='font-semibold pl-4'>Note: </span> 
          With combination strings, the GROUP filter must always be placed at the end.
          </p>
        </section>

      </div>
    </div>
  );
};

export default ModalMessage;
