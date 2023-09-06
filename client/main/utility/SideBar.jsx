import React from 'react';
import SideBarItem from './SideBarItem';

const SideBar = ({ items })=>{
  const itemsReact = [];

  for (const item of items) {
    itemsReact.push(<SideBarItem key={ item[0] } label={ item[0] } onClickItem={item[1]}/>);
  }
  
  return (
    <div className='flex w-full justify-center pt-5'>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        { itemsReact }
      </div>
    </div>
  );
};


export default SideBar;