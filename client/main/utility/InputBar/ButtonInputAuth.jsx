/**
 * ************************************
 *
 * @module  ButtonInput
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - A button to use with an input Bar
 * 
 * ************************************
 */

import React from 'react';

const ButtonInputAuth = ({ label, onClick, className })=>{
  return (
    <button onClick={onClick} type="button" className={`first:rounded-l-lg last:rounded-r-lg text-white bg-transparent border border-gray-300 hover:bg-logo-300 hover:text-gray-50 focus:ring-2 focus:ring-logo-100 font-medium text-sm px-5 py-2.5 dark:bg-brown-600 dark:hover:bg-brown-700 focus:outline-none dark:focus:ring-brown-800 ${className}`}>
      { label }
    </button>
  );
};

export default ButtonInputAuth;