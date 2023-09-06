import React from 'react';
import AllLogs from './AllLogs';
import Filter from '../utility/Filter';

const Dashboard = () => {
  
  return (
    <div className='flex flex-col grow h-5/6'>
      <Filter/>
      <AllLogs/>
    </div>
  );
};

export default Dashboard;
