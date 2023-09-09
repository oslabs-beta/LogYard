import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleclick = async () => {
    try {
      const params = new URLSearchParams({
        password
      });
      const response = await fetch(`/api/auth?${params}`);
      if (response.ok) {
        console.log('fetch response came back as OK');
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
    <div className='h-full flex items-center justify-center relative bg-gradient-to-r from-blue-500 to-green-500'>
      <img className='absolute inset-0 object-cover w-full h-full opacity-50' src='../../../forest.png'></img>
      <div className='relative'>
        <input className='passwordInput px-4 py-2 border border-tertiary-300 rounded-lg focus:outline-none text-tertiary-600 placeholder-tertiary-800 bg-white-700 focus:border-secondary-800' type='password' placeholder='password' value={password} onChange= {(e) => setPassword(e.target.value)}></input>
        <button className='bg-tertiary-600 hover:bg-tertiary-800 text-white font-bold py-2 px-4 rounded' onClick={handleclick}> Log In</button>
        <button className='button'>Hello</button>
      </div>
     
    </div>
  );
};

export default Login;
