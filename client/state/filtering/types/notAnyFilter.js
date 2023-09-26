/**
 * ************************************
 *
 * @module  logsReducer
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description removes all logs that have any of the specified properties
 * 
 * ************************************
 */

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