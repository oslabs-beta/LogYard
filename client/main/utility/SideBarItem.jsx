import React from 'react';

const SideBarItem = ({label, onClickItem})=>{
  return (
    <div>
      <button onClick={onClickItem} className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
        { label }
      </button>
    </div>
  );
};

export default SideBarItem;