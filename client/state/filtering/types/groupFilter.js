import filterSelector from '../selectors/filterSelector';

const GROUP = (logs, groupArgs) => {
  const groupObject = {};

  for (const log of logs) {
    let key = '';
    
    for (const groupArg of groupArgs) {
      const groupBy = filterSelector(log, groupArg);
      
      key += groupBy + ' ';
    }

    if (!groupObject[key]) groupObject[key] = [];

    groupObject[key].push(log);
  }

  return groupObject;
};

export default GROUP;