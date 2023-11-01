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

import React, { ChangeEvent } from 'react';

interface TextInputProps {
  type: string;
  value: string;
  onChange:(e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className: string;
}

const TextInput: React.FC<TextInputProps> = ({ type, value, onChange, placeholder, className}) => {
  return (
    <input type={type || 'text'} id={Math.random().toString()} onChange={onChange} value={value} placeholder={placeholder} className={`text-custom-darkgreen first:rounded-l-lg last:rounded-r-lg bg-custom-tan border border-custom-darktan focus:ring-custom-darkgreen focus:border-custom-darkgreen block placeholder-custom-darkgreen ${className}`}/>
  );
};

export default TextInput;