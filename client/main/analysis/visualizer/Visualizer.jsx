import React, { useEffect, useState } from 'react';

import AllLogsOverTime from './components/AllLogsOverTime.jsx';
import OneLogOverTime from './components/OneLogOverTime.jsx';
import TotalPie from './components/TotalPie.jsx';

const Visualizer = () => {
  return (
    <div className='flex flex-wrap'>
      <AllLogsOverTime />
      <TotalPie />
      <OneLogOverTime />
    </div>
  );
};

export default Visualizer;
