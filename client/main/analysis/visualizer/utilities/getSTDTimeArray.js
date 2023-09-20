const getSTDTimeArray = (arrayOfMilliseconds) => {

  const results = [];

  // took away the - 1 in arrayOfMilliseconds.length
  for (let i = 0; i < arrayOfMilliseconds.length - 1; i++) {
    const start = new Date(arrayOfMilliseconds[i]).toLocaleString();
    const end = new Date(arrayOfMilliseconds[i + 1]).toLocaleString();
    // console.log('end: ', end)
    results.push(`${start} - ${end}`);
  }
  // console.log('timeArray: ', results)
  return results;
};

export default getSTDTimeArray;
