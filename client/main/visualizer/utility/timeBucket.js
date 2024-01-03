/**
 * ************************************
 *
 * @module  timeBucketData
 * @description Converts a given logArray into an array of counted values based on the time Option.
 * 
 * ************************************
 */

const timeBucketData = (logArray, timeOption) => {
  const results = Array.from(Array(timeOption.numDivisions), ()=>0);
  
  for (const log of logArray){
    results[timeOption.getIndex(Date.parse(log.timestamp))]++;
  }
  
  return results;
};

export default timeBucketData;