/**
 * ************************************
 *
 * @module  logsReducer
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
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

const applyFilter = (results, filterString, metaData = {}) => {
  //Step 1 Parse the filter String
  const filters = parseInputString(filterString);
  metaData.errors = [];
  metaData.success = false;
  
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
      results = GROUP(results, filter.arguments, metaData);
      break;
    default:
      metaData.errors.push(`top level function: ${filter.name} not found`);
      break;
    }
  }
  
  metaData.success = true;

  return results;
};



export default applyFilter;