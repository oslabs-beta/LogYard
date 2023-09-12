import parseInputString from './parseInputString';
import HAS from './types/hasFilter';
import HASANY from './types/hasAnyFilter';
import NOT from './types/notFilter';
import NOTANY from './types/notAnyFilter';
import GROUP from './types/groupFilter';

const applyFilter = (results, filterString) => {
  //Step 1 Parse the filter String
  const filters = parseInputString(filterString);
  
  //Step 2 Run the current logs through the filter string
  for (const filter of filters) {
    switch (filter.name) {
    case 'HAS':
      results = HAS(results, filter.arguments);
      break;
    case 'HASANY':
      results = HASANY(results, filter.arguments);
      break;
    case 'NOT':
      results = NOT(results, filter.arguments);
      break;
    case 'NOTANY':
      results = NOTANY(results, filter.arguments);
      break;
    case 'GROUP':
      results = GROUP(results, filter.arguments);
      break;
    default:
      break;
    }
  }
  
  return results;
};



export default applyFilter;