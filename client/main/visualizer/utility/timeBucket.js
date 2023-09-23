const timeBucketData = (logArray, timeOption) => {
  const results = Array.from(Array(timeOption.numDivisions), ()=>0);
  
  for (const log of logArray){
    results[timeOption.getIndex(Date.parse(log.timestamp))]++;
  }
  
  return results;
};

export default timeBucketData;