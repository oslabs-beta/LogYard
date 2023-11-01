/**
 * ************************************
 *
 * @module  AuthRouter
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - Configuration for all authentication pages
 * 
 * ************************************
 */

import React from 'react';
import { Outlet } from 'react-router-dom';
import backgroundImage from '/Trees.jpg';

const AuthRouter: React.FC = () => {

  return (
    <div
      className='grow h-full w-full flex flex-col items-center justify-between overflow-x-auto overflow-y-auto bg-cover'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='flex backdrop-blur-sm flex-col h-full w-full'>
        {/* source: /client/App.tsx */}
        <Outlet/>
      </div>
    </div>
  );
};

export default AuthRouter;
