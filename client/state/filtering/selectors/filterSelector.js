/**
 * ************************************
 *
 * @module  filterSelector
 * @description Used for geting relevant log data depending on user filter.
 * 
 * 
 * ************************************
 */

const filterSelector = (log, argument, metaData)=>{
  switch (argument.name){
  case ('LEVEL'):
    return log['level'];
  case ('TIME'):
    return log['Time'];
  case ('ID'):
    return log['_id'];
  case ('MESSAGE'):
    return log['message'];
  case ('CONTEXT'):
    if (argument.params.length > 1){
      return log['meta']['Context'][argument.params[0]];
    }
    if (Object.prototype.hasOwnProperty.call(log['meta']['Context'], argument.params[0])){
      return argument.params[0];
    }

    return undefined;
  default:
    metaData.errors.push(`Selector: ${argument.name} not found`);
    return 'Invalid';
  }
};


export default filterSelector;
