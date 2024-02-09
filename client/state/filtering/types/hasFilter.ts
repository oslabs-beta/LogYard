/**
 * ************************************
 *
 * @module  HAS
 * @description removes all logs that do not have all of the specified properties
 * 
 * ************************************
 */

import { FilterMetaData } from '../../../main/dashboard/filters/types';
import { LogItem } from '../../reducers/logsReducer';
import filterSelector, { argument } from '../selectors/filterSelector';

const HAS = (logs: LogItem[], hasArgs: argument[], metaData: FilterMetaData)=>{
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
