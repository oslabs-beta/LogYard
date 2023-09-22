import React, { useEffect, useLayoutEffect, useRef } from 'react';
import c3 from 'c3';
import GraphResize from './GraphResize';
import LineGraph from './LineGraph';
import { Dropdown } from 'flowbite';

const TestGraph = ({className, bindID})=>{
  const initializeObj = useRef({});
  const graphRef = useRef(new LineGraph(bindID));

  const lineGraph = graphRef.current;

  //Create Graph with data
  useEffect(() => {
    //Instantiate LineGraph
    lineGraph.applyGraphChanges();
    
    lineGraph.setXLabels(['Day1', 'asdf', 'qwe']);
    lineGraph.Graph('asdf', [1,1300,2]);
    lineGraph.Graph('ad34fs', [1,2,1300]);
    lineGraph.Graph('er', [1,2,1300]);
    lineGraph.Graph('er4', [1,2,1300]);
    lineGraph.genColorData();
    lineGraph.loadData();

    initializeObj.initialize(lineGraph.chart);
  }, []);

  return(
    <div className={`flex flex-col bg-gray-800 text-gray-50  mt-8 m-auto p-8 pl-4 place-content-center text-center rounded-lg ${ className }`}>
      <h1 className='text-4xl text-center'>All Logs Over Time</h1>
      
      <GraphResize bindID={ bindID } initializeObj={ initializeObj } className='grow'/>
    </div>
  );
};

export default TestGraph;