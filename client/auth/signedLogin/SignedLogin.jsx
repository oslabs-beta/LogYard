/**
 * ************************************
 *
 * @module  SignedLogin
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - SignedLogin page used for logging in with u
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
    <div className='grow flex flex-col content-center justify-center text-center flex-wrap'>
      <h1 className='text-4xl text-white pb-2'>Sign In:</h1>
      <TextInput onChange={(e)=>setUsername(e.target.value)} placeholder='Username' className='w-96 rounded-lg my-1'/>
      <TextInput onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='w-96 rounded-lg my-1'/>
      {passwordCheck && <h1 className='text-gray-50 text-xl italic'>Invalid password</h1>}
      <ButtonInput onClick={()=>loginRequest(username, password, navigate, dispatch, setPasswordCheck)} label='Login' className='w-96 rounded-lg my-1'/>
      <InputBar className='my-1 flex'>
        <ButtonInput onClick={()=> navigate('/')} label='Skip' className='grow'/>
        <ButtonInput onClick={()=> navigate('/signup')} label='Create Account' className='grow'/>
      </InputBar>
    </div>
  );
};

export default SignedLogin;