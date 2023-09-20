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
import { TextInput, ButtonInput} from '../../main/utility/InputBar/InputBar';



const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [serverPassword, setServerPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState(false);

  const navigate = useNavigate();

  const signUpRequest = async (username, password, serverPassword, navigate) => {
    const params = new URLSearchParams({
      password: serverPassword,
    });
  
    const result = await fetch(`/api/profile/signup?${params}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password } ),
    });
  
    if (result.ok){
      return navigate('/main/dashboard');
    }
    else {
      setPasswordCheck(true);
    }
    
    // alert('Failed to create profile');
  };


  return (
    <div className='grow flex flex-col content-center justify-center flex-wrap'>
      <TextInput onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='w-96 rounded-lg my-1'/>
      <input type='password' placeholder='Password' className='w-96 rounded-lg my-1' onChange={(e) => setPassword(e.target.value)}></input>
      <TextInput onChange={(e) => setServerPassword(e.target.value)}  placeholder='Server Password' className='w-96 rounded-lg my-1'/>
      {passwordCheck && <h1 className='text-gray-50 text-xl italic'>Username Taken or Invalid server password</h1>}

      <ButtonInput onClick={() => signUpRequest(username, password, serverPassword, navigate)} label='Create' className='w-96 rounded-lg my-1'/>
    </div>
  );
};

export default Signup;