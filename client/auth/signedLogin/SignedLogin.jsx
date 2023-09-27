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
    <div className='gh-12 shrink-0 flex flex-col justify-start items-start font-montserrat text-gray-50'>
      <img src='../../../public/AuthLogo.png' className='h-36 mb-1 mt-12 ml-12'></img>

      <div className='mx-auto'>
        <div className='bg-custom-darkgreen/90 shadow-lg shadow-brown-900 p-5 pt-3 mt-28 rounded-lg text-center'>
        
          <h1 className='text-2xl pb-2 text-custom-tan'>SIGN IN:</h1>
          <TextInput onChange={(e)=>setUsername(e.target.value)} placeholder='Username' className='w-96 px-4 py-2 mt-1 border border-custom-tan rounded-lg focus:ring-custom-tan focus:border-custom-tan p-2 italic placeholder-custom-tan text-custom-tan bg-transparent'/>
          <TextInput type='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='w-96 px-4 py-2 my-1 mb-4 border border-custom-tan rounded-lg focus:ring-custom-tan focus:border-custom-tan p-2 italic placeholder-custom-tan text-custom-tan bg-transparent'/>
          {loginFailed && <h1 className='text-gray-50 text-xl italic mb-4'>Invalid password</h1>}
        
          <ButtonInputAuth onClick={()=>attemptLogin(username, password, navigate, dispatch, setLoginFailed)} label='Login' className='w-96 rounded-lg my-1'/>
          <InputBar className='my-1 flex'>
            <ButtonInputAuth onClick={()=> navigate('/guestLogin')} label='Guest Log In' className='w-[50%]'/>
            <ButtonInputAuth onClick={()=> navigate('/signup')} label='Sign Up' className='w-[50%]'/>
          </InputBar>

        </div>
      </div>
      
    </div>
  );
};

export default SignedLogin;