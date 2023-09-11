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
  switch (argument.name){
  case ('LEVEL'):
    return log['level'];
  case ('TIME'):
    return log['Time'];
  case ('ID'):
    return log['_id'];
  case ('CONTEXTKEY'):
    return log['meta']['Context'];
  case ('CONTEXTVAL'):
    return log['meta']['Context'][argument[0]];
  default:
    return 'Invalid';
  }
};

export default filterSelector;
