/**
 * ************************************
 *
 * @module  Login
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
    <div className='h-12 shrink-0 flex flex-col justify-start items-start font-montserrat text-gray-50'>
      <img src='/AuthLogo.png' className='h-36 mb-1 mt-12 ml-12'></img>
      <div className='mx-auto'>
        <div className='bg-custom-darkgreen/90 shadow-lg shadow-brown-900 p-5 pt-3 mt-28 rounded-lg text-center'>
        
          <h1 className='text-2xl pb-2 text-custom-tan'>GUEST:</h1>
          <TextInput type='password' onChange={(e)=>setServerPassword(e.target.value)} placeholder='Server Password' className='w-96 px-4 py-2 mb-4 mt-1 border border-custom-tan rounded-lg focus:ring-custom-tan focus:border-custom-tan p-2 italic placeholder-custom-tan text-custom-tan bg-transparent'/>
          {passwordFailed && ( <h1 className='text-gray-50 italic mb-4'> Invalid password - please try again </h1> )}
        
          <ButtonInputAuth onClick={() => onLoginClicked(serverPassword, navigate, setPasswordFailed)} label='Login' className='w-96 mb-2 rounded-lg my-1'/>
          <InputBar className='flex'>
            <ButtonInputAuth onClick={()=> navigate('/')} label='User Sign In' className='w-[50%]'/>
            <ButtonInputAuth onClick={()=> navigate('/signup')} label='Sign Up' className='w-[50%]'/>
          </InputBar>

        </div>
      </div>
      
      
    </div>
  );
};

export default Login;
