import filterSelector from '../selectors/filterSelector';

const NOTANY = (logs, notAnyArgs, metaData)=>{
  const output = [];

  outer: for (const log of logs) {
    for (const notAnyArg of notAnyArgs) {
      if (filterSelector(log, notAnyArg, metaData) === notAnyArg.params[notAnyArg.params.length - 1]) {
        continue outer;
      }
    }
    
    output.push(log);
  }

  return output;
};

export default NOTANY;