/**
 * ************************************
 *
 * @module  Dashboard
 * @description .jsx - Creates a filter tool and a table display for logs
 * 
 * ************************************
 */

import React from 'react';
import FilteredLogsTable from './logViews/FilteredLogsTable';
import Filter from './filters/Filter';

const Dashboard = () => {
  
  return (
    <div className='flex flex-col grow h-5/6'>
      <Filter/>
      <FilteredLogsTable/>
    </div>
  );
};

export default Dashboard;
