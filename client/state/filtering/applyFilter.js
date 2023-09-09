import parseInputString from './parseInputString';


const applyFilter = (logs, filterString)=>{
  //Step 1 Parse the filter String
  const filters = parseInputString(filterString);
  
  if (!filters) return undefined;

  //Step 2 Run the current logs through the filter string

  


  // const result = [];
  
  // return result;
};

console.log(applyFilter([], "ActionType:ActionCategory:'Pods: asdf:Container' AT2:AC1:'P2'"));

export default applyFilter;