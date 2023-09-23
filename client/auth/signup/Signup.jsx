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
import InputBar, { TextInput, ButtonInput } from '../../main/utility/InputBar/InputBar';
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
    <div className='grow flex flex-col content-center text-center mt-36 flex-wrap'>
      <div className='bg-gray-500/80 p-10 rounded-lg'>
        <h1 className='text-4xl text-white pb-2'>Sign Up:</h1>
        <TextInput onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='my-1 w-96 px-4 py-2 mt-1 border border-brown-700 rounded-lg focus:ring-brown-500 focus:border-orange-900 text-white p-2 italic placeholder-gray-200 bg-transparent'/>
        <TextInput type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} className='w-96 px-4 py-2 mt-1 border border-brown-700 rounded-lg focus:ring-brown-500 focus:border-orange-900 text-white p-2 italic placeholder-gray-200 bg-transparent'/>
        <TextInput onChange={(e) => setServerPassword(e.target.value)}  placeholder='Server Password' className='my-1 w-96 px-4 py-2 mt-1 border border-brown-700 rounded-lg focus:ring-brown-500 focus:border-orange-900 text-white p-2 italic placeholder-gray-200 bg-transparent'/>
        {/* if passwordCheck is true (password is incorrect or name is taken) render invalid message */}
        {passwordCheck && <h1 className='text-gray-50 text-xl italic'>Username is taken or invalid server password</h1>}
        <ButtonInput onClick={signUpRequest} label='Create' className='w-96 rounded-lg my-1'/>
        <InputBar className='my-1 flex'>
          <ButtonInput onClick={()=> navigate('/')} label='Sign-In as Guest' className='w-[50%]'/>
          <ButtonInput onClick={()=> navigate('/signedlogin')} label='Sign In' className='w-[50%]'/>
        </InputBar>
      </div>
    </div>
  );
};

export default Signup;