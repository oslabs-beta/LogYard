// import filter from './filter';

// Expects format of FilterType(FilterArg() FilterArg2("Argument")) FilterType2(FilterArg2("asdf")) /  is an escape character
// This is a big mess. You are welcome and encouraged to refactor.
// Just ensure it properly matches and creates filters

// Ex. L0A1(L1A1("L2A1") L1A2("L2A1") L1A3("L2A1" "L2A2")) L0A2(L1A1("L2A1")) L0A3(L1A1() L1A2("L2A1"))

const parseLevel1 = (filterString, i, level0Arguments) => {
  if (filterString[i + 1] === ')') return i + 2;

  while (filterString[i] && filterString[i] !== ')'){
    i++;

    const argument = {
      name: '',
      params: []
    };
    
    while (filterString[i] && filterString[i] !== '(') {
      argument.name += filterString[i];
      i++;
    }
    
    i = parseLevel2(filterString, i, argument.params);
    
    level0Arguments.push(argument);
  }

  i++;
  return i;
};

const parseLevel2 = (filterString, i, outputObject) => {
  if (filterString[i+1] === ')') return i + 2;
  
  while (filterString[i] && filterString[i] !== ')'){
    i += 2;
    let argString = '';
    
    while (filterString[i] && filterString[i] !== '"') {
      if (filterString[i] === '/'){
        i++;
      }
      
      argString += filterString[i];
      i++;
    }
    
    outputObject.push(argString);
    i++;
  }

  i++;
  return i;
};

const parseInputString = (filterString) => {
  let i = 0;
  const results = [];
  
  while (i < filterString.length){
    const outputFilterArgs = {
      name: '',
      arguments: []
    };

    while (filterString[i] && filterString[i] !== '('){
      outputFilterArgs.name += filterString[i];
      i++;
    }
    
    i = parseLevel1(filterString, i, outputFilterArgs.arguments);

    results.push(outputFilterArgs);
    i++;
  }

  return results;
};

export default parseInputString;