/**
 * ************************************
 *
 * @module  Login
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - Server password login page
 *
 * ************************************
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBar, { TextInput, ButtonInputAuth} from '../../main/utility/InputBar/InputBar';

const onLoginClicked = async (serverPassword, navigate, setPasswordFailed) => {
  try {
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ serverPassword }),
    });
    
    if (response.ok) {
      navigate('/main');
    }
    else {
      setPasswordFailed(true);
    }
  } catch (err) {
    console.log(err);
  }
};

const Login = () => {
  const [serverPassword, setServerPassword] = useState('');
  const [passwordFailed, setPasswordFailed] = useState(false);
  
  const navigate = useNavigate();

  return (
    <div className='h-12 shrink-0 flex flex-col justify-start items-center font-montserrat text-gray-50'>
      <img src='LogYardHori.png' className='h-32 mb-1 mt-12'></img>
      <div className='bg-logo-200/80 p-5 shadow-lg shadow-brown-900 pt-3 rounded-lg mt-28 text-center'>
        
        <h1 className='text-2xl  pb-2'>GUEST:</h1>
        <TextInput type='password' onChange={(e)=>setServerPassword(e.target.value)} placeholder='Server Password' className='w-96 px-4 py-2 mb-4 mt-1 border border-brown-700 rounded-lg focus:ring-brown-500 focus:border-orange-900 p-2 italic  placeholder-gray-200 bg-transparent'/>
        {passwordFailed && ( <h1 className='text-gray-50 italic mb-4'> Invalid password - please try again </h1> )}
        
        <ButtonInputAuth onClick={() => onLoginClicked(serverPassword, navigate, setPasswordFailed)} label='Login' className='w-96 mb-2 rounded-lg my-1'/>
        <InputBar className='flex'>
          <ButtonInputAuth onClick={()=> navigate('/')} label='User Sign In' className='w-[50%]'/>
          <ButtonInputAuth onClick={()=> navigate('/signup')} label='Sign Up' className='w-[50%]'/>
        </InputBar>

      </div>
    </div>
  );
};

export default Login;
