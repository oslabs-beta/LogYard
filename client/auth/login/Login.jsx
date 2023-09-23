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
import InputBar, { TextInput, ButtonInput} from '../../main/utility/InputBar/InputBar';

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
    <div className='h-12 shrink-0 flex flex-col justify-start items-center'>
      <img src='LogYardHori.png' className='h-32 mb-1 mt-12'></img>
      <div className='bg-gray-500/80 p-10 rounded-lg mt-28 text-center'>
        
        <h1 className='text-4xl text-white pb-2'>Guest Login:</h1>
        <TextInput onChange={(e)=>setServerPassword(e.target.value)} placeholder='Server Password' className='w-96 px-4 py-2 mt-1 border border-brown-700 rounded-lg focus:ring-brown-500 focus:border-orange-900 text-white p-2 italic placeholder-gray-200 bg-transparent'/>
        {passwordFailed && ( <h1 className='text-red-900 text-xl italic'> Invalid password - please try again </h1> )}
        
        <ButtonInput onClick={() => onLoginClicked(serverPassword, navigate, setPasswordFailed)} label='Login' className='w-96 rounded-lg my-1'/>
        <InputBar className='flex'>
          <ButtonInput onClick={()=> navigate('/signedlogin')} label='Sign In' className='grow'/>
          <ButtonInput onClick={()=> navigate('/signup')} label='Create Account' className='grow'/>
        </InputBar>

      </div>
    </div>
  );
};

export default Login;
