/**
 * ************************************
 *
 * @module  applyFilter
 * @description Used for applying a user generated filter. Also contains metaData about the operation.
 * 
 * ************************************
 */

import parseInputString from './parseInputString';
import HAS from './types/hasFilter';
import HASANY from './types/hasAnyFilter';
import NOT from './types/notFilter';
import NOTANY from './types/notAnyFilter';
import GROUP from './types/groupFilter';
import { FilterMetaData } from '../../main/dashboard/filters/types';
import { LogItem } from '../reducers/logsReducer';

const defaultMetaData: FilterMetaData = {
  errors: [],
  success: false,
};

const applyFilter = (results: LogItem[], filterString: string, metaData: FilterMetaData = defaultMetaData) => {

  //Step 1 Parse the filter String
  const filters = parseInputString(filterString);
  metaData.errors = [];
  metaData.success = false;

  let groupedResults: Record<string, LogItem[]> | null = null;

  //Step 2 Run the current logs through the filter string
  for (const filter of filters) {
    switch (filter.name) {
    case 'HAS':
      results = HAS(results, filter.arguments, metaData);
      break;
    case 'HASANY':
      results = HASANY(results, filter.arguments, metaData);
      break;
    case 'NOT':
      results = NOT(results, filter.arguments, metaData);
      break;
    case 'NOTANY':
      results = NOTANY(results, filter.arguments, metaData);
      break;
    case 'GROUP':
      groupedResults = GROUP(results, filter.arguments, metaData);
      break;
    default:
      metaData.errors.push(`top level function: ${filter.name} not found`);
      break;
    }
  }

  metaData.success = true;

  if (groupedResults) {
    return groupedResults;
  } else {
    return results;
  }
};



export default applyFilter;