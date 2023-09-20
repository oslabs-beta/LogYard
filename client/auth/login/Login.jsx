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
  const [serverPassword, setServerPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState(false);

  // initialize navigation
  const navigate = useNavigate();

  // contact backend to check password
  const handleclick = async (serverPassword, navigate) => {
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ serverPassword }),
      });
      // if backend comes back as 200, navigate to dashboard
      if (response.ok) {
        navigate('/main');
      }
      // otherwise, give invalid password message
      else {
        setPasswordCheck(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='h-12 shrink-0 flex flex-col justify-start items-center'>
      <img src='LogYardHori.png' className='h-32 mb-1 mt-12'></img>
      <div className='flex mt-36'>
        <input
          className='passwordInput px-4 py-2 border border-brown-700 rounded-lg focus:ring-brown-500 focus:border-orange-900 text-white p-2 italic placeholder-gray-200 bg-transparent'
          type='password'
          placeholder='password'
          value={serverPassword}
          onChange={(e) => setServerPassword(e.target.value)}
        ></input>
        <button
          className='bg-clear border border-brown-700 ml-4 focus:border-brown-500 focus:ring-brown-500 hover:bg-orange-900 hover:border-brown-500 text-white font-bold py-2 px-4 rounded-lg'
          onClick={() => handleclick(serverPassword, navigate)}
        >
            Log In
        </button>
      </div>
      {passwordCheck && (
        <h1 className='text-red-900 text-xl italic pr-12 mr-12'>
            Invalid password
        </h1>
      )}
    </div>
  );
};

export default Login;
