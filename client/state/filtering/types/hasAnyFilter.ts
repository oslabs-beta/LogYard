/**
 * ************************************
 *
 * @module  HASANY
 * @description removes all logs that do not have at least one of the specified properties
 * 
 * ************************************
 */

import { FilterMetaData } from '../../../main/dashboard/filters/types';
import { LogItem } from '../../reducers/logsReducer';
import filterSelector, { argument } from '../selectors/filterSelector';

const HASANY = (logs: LogItem[], hasAnyArgs: argument[], metaData: FilterMetaData)=>{
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