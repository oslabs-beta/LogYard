/**
 * ************************************
 *
 * @module  Login
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - SignedLogin page used for logging in with u
 *
 * ************************************
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput, ButtonInput } from '../../main/utility/InputBar/InputBar';

const signUpRequest = async (username, password, serverPassword, setPasswordCheck, navigate) => {
  // format search params for browser
  const params = new URLSearchParams({
    password: serverPassword,
  });

  // send post request for signup
  const result = await fetch(`/api/profile/signup?${params}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password } ),
  });

  if (result.ok){
    // if backend comes back as 200, navigate to dashboard
    return navigate('/main');
  }
  else {
    // otherwise, give invalid password message
    setPasswordCheck(true);
  }
};

const Signup = () => {
  // username entry state
  const [username, setUsername] = useState('');
  // password entry state
  const [password, setPassword] = useState('');
  // server password entry state
  const [serverPassword, setServerPassword] = useState('');
  // password authentication state (for pop-up message)
  const [passwordCheck, setPasswordCheck] = useState(false);

  // initialize navigation
  const navigate = useNavigate();

  return (
    <div className='grow flex flex-col content-center justify-center flex-wrap'>
      <TextInput onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='w-96 rounded-lg my-1'/>
      <TextInput type='password' placeholder='Password' className='w-96 rounded-lg my-1' onChange={(e) => setPassword(e.target.value)} />
      <TextInput onChange={(e) => setServerPassword(e.target.value)}  placeholder='Server Password' className='w-96 rounded-lg my-1'/>
      {/* if passwordCheck is true (password is incorrect or name is taken) render invalid message */}
      {passwordCheck && <h1 className='text-gray-50 text-xl italic'>Username is taken or invalid server password</h1>}
      <ButtonInput onClick={() => signUpRequest(username, password, serverPassword, setPasswordCheck, navigate)} label='Create' className='w-96 rounded-lg my-1'/>
    </div>
  );
};

export default Signup;