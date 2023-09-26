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
      <button onClick={func} className='block py-2 pl-3 pr-4 text-custom-tan hover:text-custom-darktan md:border-0 md:p-0'>
        {label}
      </button>
    </li>
  );
};

export default NavItem;