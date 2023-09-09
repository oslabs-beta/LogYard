import filter from './filter';

// Expects format of ActionType:ActionCategory:'Pods' /  is an escape character
// This is a big mess. You are welcome and encouraged to refactor.
// Just ensure it properly matches and creates filters

const parseInputString = (filterString) => {
  try {
    const filters = [];
    
    let i = 0;
    while (i < filterString.length) {
      let firstArg = '';
  
      while (filterString[i] !== ':'){
        firstArg += filterString[i];
        i++;
      }
      i++;
      
  
      let secondArg = '';
  
      while (filterString[i] !== ':'){
        secondArg += filterString[i];
        i++;
      }
      i+=2;
      
      let thirdArg = '';
      while (filterString[i] !== "'"){
        if (filterString[i] === '/'){
          i++;
        }
  
        thirdArg += filterString[i];
        i++;
      }
      i++;

      filters.push(new filter(firstArg, secondArg, thirdArg));
    }

    return filters;
  }
  catch (e) {
    return undefined;
  }
};

export default parseInputString;