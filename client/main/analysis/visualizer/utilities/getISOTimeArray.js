// returns an array of times specific to user-declared start time, end time, and desired number of intervals
const getISOTimeArray = (startTime, endTime, intervals) => {
  // get date-relevant information
  // note: Date.parse() converts db date format (YYYY-MM-DDTHH:MM:SS.MSMSMS+00:00) to millisecond format
  const startToNum = Date.parse(startTime);
  const endToNum = Date.parse(endTime);
  const totalTimeSpan = endToNum - startToNum;

  // calculate time interval between ticks
  const timeInterval = Math.floor(totalTimeSpan / intervals);

  // initialize array of times
  const timeArray = [];

  // loop 'interval' times, creating appropriate time array
  for (let i = 0; i < intervals + 1; i++) {
    // start at start time and add increments in time until end time is met
    timeArray.push(startToNum + timeInterval * i);
  }

  return timeArray;
};

export default getISOTimeArray;