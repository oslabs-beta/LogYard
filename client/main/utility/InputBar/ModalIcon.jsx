/* eslint-disable no-undef */
import React, { useState } from 'react';

import ModalMessage from './ModalMessage.jsx';

const ModalIcon = () => {

  const [modalStatus, setModalStatus] = useState(false);

  const handleToggle = () => {
    setModalStatus(!modalStatus);
  };

  return (
    <div onClick={handleToggle}>

      {/* icon image */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="lightgray" className="w-6 h-6 mt-2 mr-1 hover:cursor-pointer">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>

      {/* modal message (conditional render) */}
      {modalStatus && (<ModalMessage onClose={handleToggle}/>)}
      
    </div>
  );
};

export default ModalIcon;