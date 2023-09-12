import filterSelector from '../selectors/filterSelector';

const NOT = (logs, notArgs)=>{
  const output = [];

  outer: for (const log of logs){
    for (const notArg of notArgs){
      if (filterSelector(log, notArg) !== notArg.slice(-1)) {
        output.push(log);
        continue outer;
      }
    }

    output.push(log);
  }

  return output;
};

export default NOT;