/**
 * ************************************
 *
 * @module  levelToInd
 * @description used to covert 'level' key (a string) to appropriate number (related to that level type)
 * 
 * ************************************
 */

const levelToInd = (level) => {
  if (level === 'error ') return 0;
  else if (level === 'warn ') return 1;
  else if (level === 'info ') return 2;
  else if (level === 'http ') return 3;
  else if (level === 'verbose ') return 4;
  else if (level === 'debug ') return 5;
  else if (level === 'silly ') return 6;
  return undefined;
};

export default levelToInd;