/**
 * ************************************
 *
 * @module  parseLogDataTypes
 * @description Used for parsing a user generated filter
 * 
 * ************************************
 */

import { argument } from "./selectors/filterSelector";

// Expects format of FilterMethod(LogDataType() LogDataType2("Argument")) FilterMethod2(FilterArg2("asdf")) /  is an escape character

const parseLogDataTypes = (filterString: string, i: number, level0Arguments: argument[]) => {
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

/**
 * ************************************
 *
 * @module  parseLogDataTypeArguments
 * @description 
 * 
 * ************************************
 */

const parseLogDataTypeArguments = (filterString: string, i: number, outputObject: string[]) => {
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

/**
 * ************************************
 *
 * @module  parseFilterMethod
 * @description 
 * 
 * ************************************
 */

interface outputObject {
  name: string,
  arguments: argument[]
}

const parseFilterMethod = (filterString: string, i: number, outputObject: outputObject[]) => {
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

/**
 * ************************************
 *
 * @module  parseInputString
 * @description Parses input string
 * 
 * ************************************
 */

const parseInputString = (filterString: string) => {
  let i = 0;
  const results: outputObject[] = [];
  
  while (i < filterString.length){
    i = parseFilterMethod(filterString, i, results);
  }

  return results;
};

export default parseInputString;