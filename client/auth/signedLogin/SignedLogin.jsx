/**
 * ************************************
 *
 * @module  SignedLogin
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - SignedLogin page used for logging in with username and password
 *
 * ************************************
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBar, { TextInput, ButtonInput} from '../../main/utility/InputBar/InputBar';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../state/actions/actions';

const loginRequest = async (username, password, navigate, dispatch, setPasswordCheck) => {
  const result = await fetch('/api/profile/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password } ), // body data type must match "Content-Type" header
  });

  if (result.ok){
    const body = await result.json();
    
    dispatch(setUserData(body));
    navigate('/main');
  }
  else {
    setPasswordCheck(true);
  }
};

const SignedLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className='grow flex flex-col content-center mt-36 text-center flex-wrap'>
      <div className='bg-gray-500/80 p-10 rounded-lg'>
        <h1 className='text-4xl text-white pb-2'>Sign In:</h1>
        <TextInput onChange={(e)=>setUsername(e.target.value)} placeholder='Username' className='w-96 px-4 py-2 mt-1 border border-brown-700 rounded-lg focus:ring-brown-500 focus:border-orange-900 text-white p-2 italic placeholder-gray-200 bg-transparent'/>
        <TextInput onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='w-96 px-4 py-2 my-1 border border-brown-700 rounded-lg focus:ring-brown-500 focus:border-orange-900 text-white p-2 italic placeholder-gray-200 bg-transparent'/>
        {passwordCheck && <h1 className='text-gray-50 text-xl italic'>Invalid password</h1>}
        <ButtonInput onClick={()=>loginRequest(username, password, navigate, dispatch, setPasswordCheck)} label='Login' className='w-96 rounded-lg my-1'/>
        <InputBar className='my-1 flex'>
          <ButtonInput onClick={()=> navigate('/')} label='Sign-In as Guest' className='w-[50%]'/>
          <ButtonInput onClick={()=> navigate('/signup')} label='Create Account' className='w-[50%]'/>
        </InputBar>
      </div>
    </div>
  );
};

export default SignedLogin;