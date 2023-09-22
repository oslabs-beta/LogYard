const timeBucketData = (logArray, timeOption) => {
  const results = Array.from(Array(timeOption.numDivisions), ()=>0);
  
  
  // console.log(timeOption.getIndex(Date.parse(logArray[0].timestamp)));
  for (const log of logArray){
    

    results[timeOption.getIndex(Date.parse(log.timestamp))]++;
  }

  return results;
};

export default timeBucketData;