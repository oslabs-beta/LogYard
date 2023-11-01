/**
 * ************************************
 *
 * @module  SignedLogin
 * @description .jsx - Username + Password sign in page
 *
 * ************************************
 */

import React, { useState, ChangeEvent } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../state/actions/actions';
import InputBar, { TextInput, ButtonInputAuth} from '../../main/utility/InputBar/InputBar';
import { Dispatch } from '@reduxjs/toolkit';

interface AttemptLogin {(
  username: string,
  password: string,
  navigate: NavigateFunction,
  dispatch: Dispatch,
  setLoginFailed: (value: boolean) => void
) : Promise<void>}

const attemptLogin: AttemptLogin  = async (username, password, navigate, dispatch, setLoginFailed) => {
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

export type ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => void;
export type ClickEventHandler = () => void;

const SignedLogin: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginFailed, setLoginFailed] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  

  const onUsernameChange: ChangeEventHandler = (e) => setUsername(e.target.value);
  const onPasswordChange: ChangeEventHandler = (e) => setPassword(e.target.value);
  const onLoginClick: ClickEventHandler = () => attemptLogin(username, password, navigate, dispatch, setLoginFailed);
  const onGuestLoginClick: ClickEventHandler = () => navigate('/guestLogin')
  const onSignUpClick: ClickEventHandler = () => navigate('/signup')

  return (
    <div className='gh-12 shrink-0 flex flex-col justify-start items-start font-montserrat text-gray-50'>
      <img src='/AuthLogo.png' className='h-36 mb-1 mt-12 ml-12'></img>

      <div className='mx-auto'>
        <div className='bg-custom-darkgreen/90 shadow-lg shadow-brown-900 p-5 pt-3 mt-28 rounded-lg text-center'>
        
          <h1 className='text-2xl pb-2 text-custom-tan'>SIGN IN:</h1>
          <TextInput onChange={onUsernameChange} placeholder='Username' className='w-96 px-4 py-2 mt-1 border border-custom-tan rounded-lg focus:ring-custom-tan focus:border-custom-tan p-2 italic placeholder-custom-tan text-custom-tan bg-transparent'/>
          <TextInput type='password' onChange={onPasswordChange} placeholder='Password' className='w-96 px-4 py-2 my-1 mb-4 border border-custom-tan rounded-lg focus:ring-custom-tan focus:border-custom-tan p-2 italic placeholder-custom-tan text-custom-tan bg-transparent'/>
          {loginFailed && <h1 className='text-gray-50 text-xl italic mb-4'>Invalid password</h1>}
        
          <ButtonInputAuth onClick={onLoginClick} label='Login' className='w-96 rounded-lg my-1'/>
          <InputBar className='my-1 flex'>
            <ButtonInputAuth onClick={onGuestLoginClick} label='Guest Log In' className='w-[50%]'/>
            <ButtonInputAuth onClick={onSignUpClick} label='Sign Up' className='w-[50%]'/>
          </InputBar>

        </div>
      </div>
      
    </div>
  );
};

export default SignedLogin;