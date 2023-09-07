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
        password
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
    }
    catch (err) {
      console.log(err);
    }
  };


  return (
    <div className='h-full flex items-center justify-center'>
      <input className='passwordInput px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none text-white placeholder-primary-300 bg-primary-700 focus:border-secondary-800' 
        type='password' 
        placeholder='OSP7' 
        value={password} 
        onChange= {(e) => setPassword(e.target.value)}></input>
      <button className='bg-secondary-700 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded' 
        onClick={handleclick}> 
        Log In
      </button>
    </div>
  );
};

export default Login;
