/**
 * ************************************
 *
 * @module  Login
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - login page
 *
 * ************************************
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  // states
  const [password, setPassword] = useState('');

  // initialize navigation
  const navigate = useNavigate();

  // contact backend to check password
  const handleclick = async () => {
    try {
      const params = new URLSearchParams({
        password,
      });
      const response = await fetch(`/api/auth?${params}`);
      // if backend comes back as 200, navigate to dashboard
      if (response.ok) {
        navigate('/main/dashboard');
      }
      // otherwise, redirect to sign in
      else {
        navigate('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='h-full flex flex-col items-center justify-center bg-gradient-to-b from-sky-400 to-blue-800'>
      <div className='h-42 w-full flex flex-col items-center mt-2'>
        <img src='horiBrown.png' className='h-32 mb-1 mt-12'></img>
        <div className='flex mt-12'>
          <input
            className='passwordInput px-4 py-2 border border-brown-700 rounded-lg focus:ring-brown-500 focus:border-brown-500 text-white p-2 italic placeholder-gray-200 bg-transparent'
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            className='bg-clear border border-brown-700 ml-4 focus:border-brown-500 focus:ring-brown-500 hover:bg-brown-500 hover:border-brown-500 text-white font-bold py-2 px-4 rounded-lg'
            onClick={handleclick}
          >
        Log In
          </button>
        </div>
      </div>
    
      <div className='h-42 w-full'>
        <img src="/greenForest.png" className='h-full w-full object-cover'></img>
      </div>
    </div>
     
  );
};

export default Login;
