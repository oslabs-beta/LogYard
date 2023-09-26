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
    <button onClick={onClick} type="button" className={`first:rounded-l-lg last:rounded-r-lg text-custom-tan bg-transparent border border-custom-tan hover:bg-custom-darkgreen hover:text-custom-tan focus:ring-2 font-medium text-sm px-5 py-2.5 ${className}`}>
      { label }
    </button>
  );
};

export default ButtonInputAuth;