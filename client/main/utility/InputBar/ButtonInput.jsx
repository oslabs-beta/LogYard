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

const ButtonInput = ({ label, onClick, className })=>{
  return (
    <button onClick={onClick} type="button" className={`first:rounded-l-lg last:rounded-r-lg text-white bg-secondary-700 hover:bg-secondary-800 focus:ring-4 focus:ring-secondary-300 font-medium text-sm px-5 py-2.5 dark:bg-secondary-600 dark:hover:bg-secondary-700 focus:outline-none dark:focus:ring-secondary-800 ${className}`}>
      {label}
    </button>);
};

export default ButtonInput;