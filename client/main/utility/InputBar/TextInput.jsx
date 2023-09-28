/**
 * ************************************
 *
 * @module  TextInput
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - Text input for use with input bar
 * 
 * ************************************
 */

import React from 'react';

const TextInput = ({ type, value, onChange, placeholder, className}) => {
  return (
    <input type={type || 'text'} id={Math.random()} onChange={onChange} value={value} placeholder={placeholder} className={`text-custom-darkgreen first:rounded-l-lg last:rounded-r-lg bg-custom-tan border border-custom-darktan focus:ring-custom-darkgreen focus:border-custom-darkgreen block placeholder-custom-darkgreen ${className}`}/>
  );
};

export default TextInput;