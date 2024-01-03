/**
 * ************************************
 *
 * @module  NavBar
 * @description .jsx - nav-bar component
 * 
 * ************************************
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavItem from './NavItem.jsx';

const NavBar = ({routes})=>{
  const navigate = useNavigate();

  const allNavItems = [];

  for (const route of routes){
    allNavItems.push(
      <NavItem key={route[0]} label={route[0]} func={route[1]}></NavItem>
    );
  }

  return (
    <nav className='bg-custom-darkgreen border-b border-gray-900 dark:bg-gray-900 shadow-md h-auto' >
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <div className="flex items-center ml-20">
          <img onClick={() => navigate('/main')} 
            src="/NavBarLogo.png" 
            className="h-12 mr-0 hover:cursor-pointer" 
            alt="Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LogYard</span> */}
        </div>
        <div className='hidden w-full md:block md:w-auto'>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 mr-20 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            { allNavItems }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;