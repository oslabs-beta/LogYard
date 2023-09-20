import filterSelector from '../selectors/filterSelector';

const GROUP = (logs, groupArgs, metaData) => {
  const groupObject = {};

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