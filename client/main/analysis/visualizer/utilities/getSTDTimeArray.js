const getSTDTimeArray = (arrayOfMilliseconds) => {

  const results = [];

  for (let i = 0; i < arrayOfMilliseconds.length - 1; i++) {
    const start = new Date(arrayOfMilliseconds[i]).toLocaleString();
    const end = new Date(arrayOfMilliseconds[i + 1]).toLocaleString();
    results.push(`${start} - ${end}`);
  }

  return results;
};

export default getSTDTimeArray;
