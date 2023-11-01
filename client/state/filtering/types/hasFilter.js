/**
 * ************************************
 *
 * @module  HAS
 * @description removes all logs that do not have all of the specified properties
 * 
 * ************************************
 */

import filterSelector from '../selectors/filterSelector';

const HAS = (logs, hasArgs, metaData)=>{
  const output = [];

  outer: for (const log of logs){
    for (const hasArg of hasArgs){
      if (filterSelector(log, hasArg, metaData) !== hasArg.params[hasArg.params.length - 1]) {
        continue outer;
      }
    }
    
    output.push(log);
  }

  return output;
};

export default HAS;
