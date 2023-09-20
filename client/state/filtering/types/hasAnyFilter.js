import filterSelector from '../selectors/filterSelector';

const HASANY = (logs, hasAnyArgs, metaData)=>{
  const output = [];

  outer: for (const log of logs) {
    for (const hasAnyArg of hasAnyArgs) {
      if (filterSelector(log, hasAnyArg, metaData) === hasAnyArg.params[hasAnyArg.params.length - 1]) {
        output.push(log);
        continue outer;
      }
    }
  }

  return output;
};

export default HASANY;