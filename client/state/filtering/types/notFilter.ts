/**
 * ************************************
 *
 * @module  NOT
 * @description removes all logs that have all of the specified properties
 * 
 * ************************************
 */

import { FilterMetaData } from '../../../main/dashboard/filters/types';
import { LogItem } from '../../reducers/logsReducer';
import filterSelector, { argument } from '../selectors/filterSelector';

const NOT = (logs: LogItem[], notArgs: argument[], metaData: FilterMetaData)=>{
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