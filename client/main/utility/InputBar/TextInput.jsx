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

const TextInput = ({value, onChange, placeholder, className})=>{
  return (
    <input type="text" onChange={onChange} value={value} placeholder={placeholder} className={`first:rounded-l-lg last:rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-brown-500 focus:border-brown-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-brown-500 dark:focus:border-brown-500 ${className}`}/>
    
  );
};

export default TextInput;