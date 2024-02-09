/**
 * ************************************
 *
 * @module  NOTANY
 * @description removes all logs that have any of the specified properties
 * 
 * ************************************
 */

import { FilterMetaData } from '../../../main/dashboard/filters/types';
import { LogItem } from '../../reducers/logsReducer';
import filterSelector, { argument } from '../selectors/filterSelector';

const NOTANY = (logs: LogItem[], notAnyArgs: argument[], metaData: FilterMetaData)=>{
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