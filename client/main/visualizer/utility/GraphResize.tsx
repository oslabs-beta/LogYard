/**
 * ************************************
 *
 * @module  GraphResize
 * @description .tsx - Contains a DOM object for a C3 component to hook into.
 * 
 * ************************************
 */

import React, { useRef } from 'react';
import { GraphResizeProps, OnceObject } from './types';

// classname is used for any properties you want to add to the containing div
// bindID is the id DOM Object that will be create and the chart will be bound to.
// initializeObj is an object that will set a function called initialize
// initializeObj.initialize needs to be called AFTER RENDERING. It requires the bound chart

const GraphResize = ({ className, bindID, initializeObj }: GraphResizeProps)=>{
  const resizeRef = useRef<Element | null| any>();
  const onceObject = useRef<OnceObject>({ initializedObserver: false });

  initializeObj.initialize = (chart: any)=>{
    // Use Effect can trigger twice under certain circumstances.
    // This prevents multiple observers on the same item.
    if (onceObject.current.initializedObserver) return;
    onceObject.current.initializedObserver =  true;

    const resizeObserver = new ResizeObserver(() => {
      chart.resize();
    });

    if (resizeRef.current) {
      resizeObserver.observe(resizeRef.current);
    }
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