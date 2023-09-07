/**
 * ************************************
 *
 * @module  NavItem
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - each nav option in nav-bar
 * 
 * ************************************
 */

import React from 'react';

const NavItem = ({label, func})=>{
  return (
    <li>
      <button onClick={func} className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
        {label}
      </button>
    </li>
  );
};

export default NavItem;