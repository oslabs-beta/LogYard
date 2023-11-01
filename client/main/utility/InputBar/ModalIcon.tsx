/**
 * ************************************
 *
 * @module  ModalIcon
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - A modal button used for displaying proper filter strings
 * 
 * ************************************
 */

import React, { useState } from 'react';
import ModalMessage from './ModalMessage.js';


const ModalIcon: React.FC = () => {

  const [modalStatus, setModalStatus] = useState<boolean>(false);

  const handleToggle = ():void => {
    setModalStatus(!modalStatus);
  };

  return (
    <div onClick={handleToggle} className='my-auto'>

      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='beige' className='w-6 h-6 mr-1 hover:cursor-pointer'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z' />
      </svg>

      {modalStatus && (<ModalMessage onClose={handleToggle}/>)}
      
    </div>
  );
};

export default ModalIcon;
