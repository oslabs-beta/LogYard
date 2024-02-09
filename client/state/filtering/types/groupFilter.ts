/**
 * ************************************
 *
 * @module  GROUP
 * @description Combines all logs into an object. Each key is a unique log property based on input filter.
 * 
 * ************************************
 */

import { FilterMetaData } from '../../../main/dashboard/filters/types';
import { LogItem } from '../../reducers/logsReducer';
import filterSelector, { argument } from '../selectors/filterSelector';

const GROUP = (logs: LogItem[], groupArgs: argument[], metaData: FilterMetaData) => {
  const groupObject: Record<string, LogItem[]> = {};

  for (const log of logs) {
    let key = '';
    
    for (const groupArg of groupArgs) {
      const groupBy = filterSelector(log, groupArg, metaData);
      
      key += groupBy + ' ';
    }

    if (!groupObject[key]) groupObject[key] = [];

    groupObject[key].push(log);
  }

  return groupObject;
};

export default GROUP;