/**
 * ************************************
 *
 * @module  SignedLogin
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - Username + Password sign in page
 *
 * ************************************
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../state/actions/actions';
import InputBar, { TextInput, ButtonInputAuth} from '../../main/utility/InputBar/InputBar';

const attemptLogin = async (username, password, navigate, dispatch, setLoginFailed) => {
  const loginResult = await fetch('/api/profile/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password } ), // body data type must match "Content-Type" header
  });

  if (loginResult.ok){
    const body = await loginResult.json();
    
    dispatch(setUserData(body));
    navigate('/main');
  }
  else {
    setLoginFailed(true);
  }
};

const SignedLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className='gh-12 shrink-0 flex flex-col justify-start items-center font-montserrat text-gray-50'>
      <img src='LogYardHori.png' className='h-26 mb-1 mt-12'></img>

      <div className='bg-logo-200/80 shadow-lg shadow-brown-900 p-5 pt-3 mt-28 rounded-lg text-center'>
        
        <h1 className='text-2xl pb-2'>SIGN IN:</h1>
        <TextInput onChange={(e)=>setUsername(e.target.value)} placeholder='Username' className='w-96 px-4 py-2 mt-1 border border-brown-700 rounded-lg focus:ring-brown-500 focus:border-orange-900 p-2 italic placeholder-gray-200 bg-transparent'/>
        <TextInput type='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='w-96 px-4 py-2 my-1 border border-brown-700 rounded-lg focus:ring-brown-500 focus:border-orange-900 p-2 italic placeholder-gray-200 bg-transparent'/>
        {loginFailed && <h1 className='text-gray-50 text-xl italic'>Invalid password</h1>}
        
        <ButtonInputAuth onClick={()=>attemptLogin(username, password, navigate, dispatch, setLoginFailed)} label='Login' className='w-96 rounded-lg my-1'/>
        <InputBar className='my-1 flex'>
          <ButtonInputAuth onClick={()=> navigate('/')} label='Sign-In as Guest' className='grow'/>
          <ButtonInputAuth onClick={()=> navigate('/signup')} label='Create Account' className='grow'/>
        </InputBar>

      </div>
    </div>
  );
};

export default SignedLogin;