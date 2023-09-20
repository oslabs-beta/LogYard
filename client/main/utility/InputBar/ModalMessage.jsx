// eslint modifier for example scripts in modal
/* eslint-disable react/no-unescaped-entities */

import React, { useState } from 'react';

const ModalMessage = ({ onClose }) => {

  return ( 
    <div className={'absolute z-10 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'}>
      <div className='bg-gray-300 p-2 rounded border-4 border-black'>

        <div className='w-full text-right'>
          <button className='text-white bg-red-700 w-16' onClick={onClose}>Close</button>
        </div>
        

        <section>
          <header className='text-lg font-bold'>HAS:</header>
          <p>
            <span className='font-semibold'>Description: </span> 
					Shows any and all logs with specified content.
          </p>
          <p>
            <span className='font-semibold'>Example: </span> 
					
          </p>
        </section>

        <section>
          <header className='text-lg font-bold'>NOT:</header>
          <p>
            <span className='font-semibold'>Description: </span> 
					...
          </p>
          <p>
            <span className='font-semibold'>Example: </span> 
					...
          </p>
        </section>

        <section>
          <header className='text-lg font-bold'>HASANY:</header>
          <p>
            <span className='font-semibold'>Description: </span> 
					...
          </p>
          <p>
            <span className='font-semibold'>Example: </span> 
					...
          </p>
        </section>

        <section>
          <header className='text-lg font-bold'>NOTANY:</header>
          <p>
            <span className='font-semibold'>Description: </span> 
					...
          </p>
          <p>
            <span className='font-semibold'>Example: </span> 
					...
          </p>
        </section>

        <section>
          <header className='text-lg font-bold'>GROUP:</header>
          <p>
            <span className='font-semibold'>Description: </span> 
					...
          </p>
          <p>
            <span className='font-semibold'>Example: </span> 
					...
          </p>
        </section>

        <section>
          <header className='text-lg font-bold'>Combinations:</header>
          <p>
            <span className='font-semibold'>Description: </span> 
					...
          </p>
          <p>
            <span className='font-semibold'>Example: </span> 
					...
          </p>
        </section>

      </div>
    </div>
  );
};

export default ModalMessage;
