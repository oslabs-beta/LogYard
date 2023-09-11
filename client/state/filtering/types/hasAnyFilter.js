import filterSelector from '../selectors/filterSelector';

const HASANY = (logs, hasAnyArgs)=>{
  const output = [];

  for (const log of logs) {
    let successful = false;

    for (const hasAnyArg of hasAnyArgs) {
      if (filterSelector(log, hasAnyArg) === hasAnyArg.slice(-1)) {
        successful = true;
        break;
      }
    }
    
    if (successful){
      output.push(log);
    }
  }

  return output;
};

export default HASANY;