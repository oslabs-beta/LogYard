/**
 * ************************************
 *
 * @module  logsReducer
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description removes all logs that have all of the specified properties
 * 
 * ************************************
 */

import filterSelector from '../selectors/filterSelector';

const NOT = (logs, notArgs, metaData)=>{
  const output = [];

  outer: for (const log of logs){
    for (const notArg of notArgs){
      if (filterSelector(log, notArg, metaData) !== notArg.params[notArg.params.length - 1]) {
        output.push(log);
        continue outer;
      }
    }
  }

  return output;
};

export default NOT;