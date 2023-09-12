import filterSelector from '../selectors/filterSelector';

const NOT = (logs, notArgs)=>{
  const output = [];

  outer: for (const log of logs){
    for (const notArg of notArgs){
      console.log(filterSelector(log, notArg), notArg.params[notArg.params.length - 1]);

      if (filterSelector(log, notArg) !== notArg.params[notArg.params.length - 1]) {
        output.push(log);
        continue outer;
      }
    }
  }

  return output;
};

export default NOT;