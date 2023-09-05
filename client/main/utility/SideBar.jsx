import React from 'react';
import SideBarItem from './SideBarItem';

const SideBar = ({ items })=>{
  const itemsReact = [];

  for (const item of items) {
    itemsReact.push(<SideBarItem key={ item[0] } label={ item[0] } onClickItem={item[1]}/>);
  }
  
  return (
    <div className='w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 p-5'>
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 flex-col flex">
        <div className="space-y-2 font-medium grow flex flex-col justify-center">
          { itemsReact }
        </div>
      </div>
    </div>
  );
};


export default SideBar;