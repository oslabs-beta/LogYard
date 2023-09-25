/**
 * ************************************
 *
 * @module  logsReducer
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description Used for parsing a user generated filter
 * 
 * ************************************
 */
// Expects format of FilterMethod(LogDataType() LogDataType2("Argument")) FilterMethod2(FilterArg2("asdf")) /  is an escape character


const parseLogDataTypes = (filterString, i, level0Arguments) => {
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
    
    i = parseLogDataTypeArguments(filterString, i, argument.params);
    
    level0Arguments.push(argument);
  }

  i++;
  return i;
};

const parseLogDataTypeArguments = (filterString, i, outputObject) => {
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

const parseFilterMethod = (filterString, i, outputObject) => {
  const outputFilterMethod = {
    name: '',
    arguments: []
  };

  while (filterString[i] && filterString[i] !== '('){
    outputFilterMethod.name += filterString[i];
    i++;
  }
  
  i = parseLogDataTypes(filterString, i, outputFilterMethod.arguments);

  outputObject.push(outputFilterMethod);
  i++;
  
  return i;
};

const parseInputString = (filterString) => {
  let i = 0;
  const results = [];
  
  while (i < filterString.length){
    i = parseFilterMethod(filterString, i, results);
  }

  return results;
};

export default parseInputString;