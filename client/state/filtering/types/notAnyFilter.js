import filterSelector from '../selectors/filterSelector';

const NOTANY = (logs, notAnyArgs)=>{
  const output = [];

  for (const log of logs) {
    let successful = true;

    for (const notAnyArg of notAnyArgs) {
      if (filterSelector(log, notAnyArg) === notAnyArg.slice(-1)) {
        successful = false;
        break;
      }
    }
    
    if (successful){
      output.push(log);
    }
  }

  return output;
};

export default NOTANY;