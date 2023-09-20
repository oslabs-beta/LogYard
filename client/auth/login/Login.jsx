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
import backgroundImage from '/fallBG.jpg';

const Login = () => {
  // password entry state
  const [password, setPassword] = useState('');
  // password authentication state (for pop-up message)
  const [passwordCheck, setPasswordCheck] = useState(false);

  // initialize navigation
  const navigate = useNavigate();

  // contact backend to check password
  const handleclick = async () => {
    try {
      // format search params for browser
      const params = new URLSearchParams({
        password,
      });
      const response = await fetch(`/api/auth?${params}`);
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
    <div className='grow h-5/6 flex flex-col items-center justify-between overflow-x-auto overflow-y-auto bg-cover' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='h-12 shrink-0 flex flex-col justify-start items-center'>
        <img src='LogYardHori.png' className='h-32 mb-1 mt-12'></img>
        <div className='flex mt-36'>
          <input
            className='passwordInput px-4 py-2 border border-brown-700 rounded-lg focus:ring-brown-500 focus:border-orange-900 text-white p-2 italic placeholder-gray-200 bg-transparent'
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            className='bg-clear border border-brown-700 ml-4 focus:border-brown-500 focus:ring-brown-500 hover:bg-orange-900 hover:border-brown-500 text-white font-bold py-2 px-4 rounded-lg'
            onClick={handleclick}
          >
        Log In
          </button>
        </div>
        {/* if passwordCheck is true (password is incorrect) render invalid password message */}
        {passwordCheck && <h1 className='text-red-900 text-xl italic pr-12 mr-12'>Invalid password</h1>}
      </div>
    </div>
  );
};

export default Login;
