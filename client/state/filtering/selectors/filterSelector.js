// { Time, level, meta, message, _id }

// Handling grouping?
// For Group By each additional arg splits the data further (pure string comparisons)
  // ALL
  // TIME->TIME //Custom Time comparison
  // ID->ID
  // LEVEL->LEVEL
  // MESSAGE->MESSAGE
  // CONTEXTKEY -> contextKeys
  // CONTEXTVAL (KEY:'') => CONTEXTVAL


const filterSelector = (log, argument)=>{
  // console.log(JSON.parse(JSON.stringify(log['meta']['Context'])));

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
    return 'Invalid';
  }
};

const comparisonFunction = (selectedData, )=>{

};

export default filterSelector;
