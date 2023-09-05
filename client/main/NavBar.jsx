import React from 'react';
import NavItem from './NavItem.jsx';

const NavBar = ({routes})=>{
  const options = [];
  
  for (const route of routes){
    options.push(<NavItem key={route[0]} label={route[0]} func={route[1]}></NavItem>);
  }
  
  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <div className="flex items-center">
          {/* <img src="../" className="h-8 mr-3" alt="Flowbite Logo" /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LogYard</span>
        </div>
        <div className='hidden w-full md:block md:w-auto'>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            { options }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;