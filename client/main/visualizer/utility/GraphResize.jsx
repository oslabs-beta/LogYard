import React, { useEffect, useRef } from 'react';

//classname is used for any properties you want to add to the containing div
//bindID is the id of the object you want to bind to
//initializeObj is an object that will set a function called initialize
//initialize needs to be called AFTER RENDERING as that is when the document can rerender

const GraphResize = ({ className, bindID, initializeObj})=>{
  
  initializeObj.initialize = (chart)=>{
    document.querySelector(`#${ bindID }`).addEventListener('resize', () => {
      chart.resize();
    });

    chart.resize();
  };


  return(
    <div className={`relative ${ className }`}>
      <div className='absolute flex flex-col top-0 left-0 w-full h-full max-w-full max-h-full'>
        <div id={ bindID } className='grow min-h-full'></div>
      </div>
    </div>
  );
};

export default GraphResize;