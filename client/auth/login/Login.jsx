/**
 * ************************************
 *
 * @module  Login
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - login page
 *
 * ************************************
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '/fallBG.jpg';
import InputBar, { TextInput, ButtonInput} from '../../main/utility/InputBar/InputBar';

const Login = () => {
  // states
  const [serverPassword, setServerPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState(false);

  // initialize navigation
  const navigate = useNavigate();


  // contact backend to check password
  const handleclick = async (serverPassword, navigate) => {
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ serverPassword }),
      });
      // if backend comes back as 200, navigate to dashboard
      if (response.ok) {
        navigate('/main');
      }
      // otherwise, give invalid password message
      else {
        setPasswordCheck(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='h-12 shrink-0 flex flex-col justify-start items-center'>
      <img src='LogYardHori.png' className='h-32 mb-1 mt-12'></img>
      <div className='bg-gray-500/80 p-10 rounded-lg mt-28 text-center'>

        <h1 className='text-4xl text-white pb-2'>Guest Login:</h1>

        <TextInput onChange={(e)=>setServerPassword(e.target.value)} placeholder='Server Password' className='w-96 px-4 py-2 mt-1 border border-brown-700 rounded-lg focus:ring-brown-500 focus:border-orange-900 text-white p-2 italic placeholder-gray-200 bg-transparent'/>
        
        {passwordCheck && (
          <h1 className='text-red-900 text-xl italic'>
              Invalid password - please try again
          </h1>
        )}
        
        <ButtonInput onClick={() => handleclick(serverPassword, navigate)} label='Login' className='w-96 rounded-lg my-1'/>

        <InputBar className='flex'>
          <ButtonInput onClick={()=> navigate('/signedlogin')} label='Sign In' className='w-[50%]'/>
          <ButtonInput onClick={()=> navigate('/signup')} label='Create Account' className='w-[50%]'/>
        </InputBar>

      </div>
    </div>
  );
};

export default Login;
