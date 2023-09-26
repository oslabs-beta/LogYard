import React from 'react';

const handleToggle = (booleanValue, setBooleanValue) => {
  if (booleanValue) {
    setBooleanValue(false);
  }
  else setBooleanValue(true);
};

const CheckBox = ({displayLine, setDisplayLine, displayDonut, setDisplayDonut, displayBar, setDisplayBar}) => {

  return (
    <div className='h-8 w-1/2 my-2 mx-5 py-2 bg-gray-800 rounded-lg flex'>
      <div className='flex items-center mx-2'>
        <input id="default-checkbox" type="checkbox" value="" defaultChecked={displayLine} onClick={() => handleToggle(displayLine, setDisplayLine)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-800 dark:border-gray-600"></input>
        <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-100 dark:text-gray-300">Line Graph</label>
      </div>
      <div className='flex items-center mx-2'>
        <input id="default-checkbox" type="checkbox" value="" defaultChecked={displayDonut} onClick={() => handleToggle(displayDonut, setDisplayDonut)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-800 dark:border-gray-600"></input>
        <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-100 dark:text-gray-300">Donut Graph</label>
      </div>
      <div className='flex items-center mx-2'>
        <input id="default-checkbox" type="checkbox" value="" defaultChecked={displayDonut} onClick={() => handleToggle(displayBar, setDisplayBar)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-800 dark:border-gray-600"></input>
        <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-100 dark:text-gray-300">Bar Graph</label>
      </div>
    </div>
  );
};

export default CheckBox;