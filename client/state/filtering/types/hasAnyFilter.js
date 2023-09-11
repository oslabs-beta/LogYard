import filterSelector from '../selectors/filterSelector';

const HASANY = (logs, hasAnyArgs)=>{
  const output = [];

  outer: for (const log of logs) {
    for (const hasAnyArg of hasAnyArgs) {
      if (filterSelector(log, hasAnyArg) === hasAnyArg.slice(-1)) {
        output.push(log);
        continue outer;
      }
    }
  }

  return output;
};

export default HASANY;