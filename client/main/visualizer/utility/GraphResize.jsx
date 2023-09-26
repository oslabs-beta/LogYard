/**
 * ************************************
 *
 * @module  GraphResize
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - Contains a DOM object for a C3 component to hook into.
 * 
 * It allows conventional responsive CSS design while using a C3 component (not native)
 * 
 * ************************************
 */

import React, { useRef } from 'react';

// classname is used for any properties you want to add to the containing div
// bindID is the id DOM Object that will be create and the chart will be bound to.
// initializeObj is an object that will set a function called initialize
// initializeObj.initialize needs to be called AFTER RENDERING. It requires the bound chart

const GraphResize = ({ className, bindID, initializeObj })=>{
  const resizeRef = useRef();
  const onceObject = useRef({ initializedObserver: false });

  initializeObj.initialize = (chart)=>{
    // Use Effect can trigger twice under certain circumstances.
    // This prevents multiple observers on the same item.
    if (onceObject.initializedObserver) return;
    onceObject.initializedObserver =  true;

    const resizeObserver = new ResizeObserver(() => {
      chart.resize();
    });

    resizeObserver.observe(resizeRef.current);

    chart.resize();
  };

  return(
    <div ref={ resizeRef } className={`relative ${ className }`}>
      <div className='absolute flex flex-col top-0 left-0 w-full h-full max-w-full max-h-full'>
        <div id={ bindID } className='grow min-h-full'/>
      </div>
    </div>
  );
};

export default GraphResize;