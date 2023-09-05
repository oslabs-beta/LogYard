import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleclick = async () => {
    try {
      const params = new URLSearchParams({
        password
      });
      const response = await fetch(`http://localhost:8080/login/resource?${params}`);
      if (response.ok) {
        navigate('/main/dashboard');
      }
    }
    catch (err) {
      console.log(err);
    }
  };


  return (
    <div className='min-h-screen flex items-center justify-center'>
      <input className='passwordInput px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' type='password' placeholder='password' value={password} onChange= {(e) => setPassword(e.target.value)}></input>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleclick}> Log In</button>
    </div>
  );
};

export default Login;
