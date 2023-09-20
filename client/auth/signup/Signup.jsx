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
import { useDispatch } from 'react-redux';
import { setUserData } from '../../state/actions/actions';

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
  const dispatch = useDispatch();
  
  //Upon attempted Sign in
  const signUpRequest = async () => {
    
    // send post request for signup
    const result = await fetch('/api/profile/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, serverPassword } ),
    });
    
    const body = await result.json();

    if (result.ok){
      // if backend comes back as 200, navigate to dashboard and set data
      dispatch(setUserData(body));

      return navigate('/main');
    }
    else {
      // otherwise, give invalid password message
      setPasswordCheck(true);
    }
  };


  return (
    <div className='grow flex flex-col content-center justify-center flex-wrap'>
      <TextInput onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='w-96 rounded-lg my-1'/>
      <TextInput type='password' placeholder='Password' className='w-96 rounded-lg my-1' onChange={(e) => setPassword(e.target.value)} />
      <TextInput onChange={(e) => setServerPassword(e.target.value)}  placeholder='Server Password' className='w-96 rounded-lg my-1'/>
      {/* if passwordCheck is true (password is incorrect or name is taken) render invalid message */}
      {passwordCheck && <h1 className='text-gray-50 text-xl italic'>Username is taken or invalid server password</h1>}
      <ButtonInput onClick={signUpRequest} label='Create' className='w-96 rounded-lg my-1'/>
    </div>
  );
};

export default Signup;