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



const SignedLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState(false);

  const navigate = useNavigate();

  const loginRequest = async (username, password, navigate) => {
    const result = await fetch('/api/profile/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password } ), // body data type must match "Content-Type" header
    });
  
    if (result.ok){
      navigate('/main/dashboard');
    }
    else {
      setPasswordCheck(true);
    }
  };

  return (
    <div className='grow flex flex-col content-center justify-center flex-wrap'>
      <TextInput onChange={(e)=>setUsername(e.target.value)} placeholder='Username' className='w-96 rounded-lg my-1'/>
      <TextInput onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='w-96 rounded-lg my-1'/>
      {passwordCheck && <h1 className='text-gray-50 text-xl italic'>Invalid password</h1>}
      <ButtonInput onClick={()=>loginRequest(username, password, navigate)} label='Login' className='w-96 rounded-lg my-1'/>
    </div>
  );
};

export default SignedLogin;