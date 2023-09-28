import React from 'react';

const handleToggle = (booleanValue, setBooleanValue) => {
  if (booleanValue) {
    setBooleanValue(false);
  }
  else setBooleanValue(true);
};

const CheckBox = ({displayLine, setDisplayLine, displayDonut, setDisplayDonut, displayBar, setDisplayBar}) => {

  return (
    <div className='h-8 w-1/2 mt-4 mx-5 py-2 bg-custom-darkgreen  rounded-lg flex'>
      <div className='flex items-center mx-2'>
        <input id="line-checkbox" type="checkbox" value="" defaultChecked={displayLine} onClick={() => handleToggle(displayLine, setDisplayLine)} className="w-4 h-4 text-custom-green border-gray-300 rounded focus:ring-1 focus:ring-custom-tan hover:cursor-pointer"></input>
        <label htmlFor="line-checkbox" className="ml-2 text-sm font-medium text-gray-100 ">Line Graph</label>
      </div>
      <div className='flex items-center mx-2'>
        <input id="donut-checkbox" type="checkbox" value="" defaultChecked={displayDonut} onClick={() => handleToggle(displayDonut, setDisplayDonut)} className="w-4 h-4 text-custom-green border-gray-300 rounded focus:ring-1 focus:ring-custom-tan hover:cursor-pointer"></input>
        <label htmlFor="donut-checkbox" className="ml-2 text-sm font-medium text-gray-100 dark:text-gray-300">Donut Graph</label>
      </div>
      <div className='flex items-center mx-2'>
        <input id="bar-checkbox" type="checkbox" value="" defaultChecked={displayDonut} onClick={() => handleToggle(displayBar, setDisplayBar)} className="w-4 h-4 text-custom-green border-gray-300 rounded focus:ring-1 focus:ring-custom-tan hover:cursor-pointer"></input>
        <label htmlFor="bar-checkbox" className="ml-2 text-sm font-medium text-gray-100 dark:text-gray-300">Bar Graph</label>
      </div>
    </div>
  );
};

export default CheckBox;