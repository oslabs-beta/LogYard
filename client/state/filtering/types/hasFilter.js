// For blacklist all args must fail
// For whitelist all args must pass
// For blacklistAny one args must fail
// For whitelistAny one arg must pass


import filterSelector from '../selectors/filterSelector';

const HAS = (logs, hasArgs)=>{
  const output = [];

  outer: for (const log of logs){
    for (const hasArg of hasArgs){
      if (filterSelector(log, hasArg) !== hasArg[hasArg.length - 1]) {
        continue outer;
      }
    }

    output.push(log);
  }

  return output;
};

export default HAS;
