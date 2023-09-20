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
import { TextInput, ButtonInput} from '../../main/utility/InputBar/InputBar';

const loginRequest = async (username, password, setPasswordCheck, navigate) => {
  // send post request for signin
  const result = await fetch('/api/profile/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password } ), // body data type must match "Content-Type" header
  });

  if (result.ok){
    // if backend comes back as 200, navigate to dashboard
    navigate('/main');
  }
  else {
    // otherwise, give invalid password message
    setPasswordCheck(true);
  }
};

const SignedLogin = () => {
  // username entry state
  const [username, setUsername] = useState('');
  // password entry state
  const [password, setPassword] = useState('');
  // password authentication state (for pop-up message)
  const [passwordCheck, setPasswordCheck] = useState(false);

  // initialize navigation
  const navigate = useNavigate();

  return (
    <div className='grow flex flex-col content-center justify-center text-center flex-wrap'>
      <h1 className='text-4xl text-white pb-2'>Sign In:</h1>
      <TextInput onChange={(e)=>setUsername(e.target.value)} placeholder='Username' className='w-96 rounded-lg my-1'/>
      <TextInput onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='w-96 rounded-lg my-1'/>
      {/* if passwordCheck is true (password is incorrect) render invalid username or password message */}
      {passwordCheck && <h1 className='text-gray-50 text-xl italic'>Invalid username or password</h1>}
      <ButtonInput onClick={()=>loginRequest(username, password, setPasswordCheck, navigate)} label='Login' className='w-96 rounded-lg my-1'/>
    </div>
  );
};

export default SignedLogin;