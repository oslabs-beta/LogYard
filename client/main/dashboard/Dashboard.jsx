import React from 'react';
import AllLogs from './AllLogs';
import SideBar from '../utility/SideBar';

const Dashboard = () => {
  

  return (
    <div className='flex grow h-5/6'>
      <SideBar items={[
        ['Quantity', ()=>{}],
        ['Time', ()=>{}],
        ['Viewer', ()=>{}],
        ['Export Data', ()=>{}],
      ]}/>
      <AllLogs/>
    </div>
  );
};

export default Dashboard;
