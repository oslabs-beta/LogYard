/**
 * ************************************
 *
 * @module  Dashboard
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - Creates a filter tool and a table display for logs
 * 
 * ************************************
 */

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
