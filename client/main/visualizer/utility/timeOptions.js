/**
 * ************************************
 *
 * @module  levelToInd
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/20/2023
 * @description A set of objects that describe how to organize time based data within a graph.
 * 
 * ************************************
 */

function getIndex(millisecondsEpoc) {
  const intervalWidth = ((this.millisecondsEnd - this.millisecondsStart) / this.numDivisions);

  return Math.floor((millisecondsEpoc - this.millisecondsStart) / intervalWidth );
}

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const oneDay = ()=>{return {
  label: 'Past 24 Hours',
  millisecondsStart: Date.now() - (24 * 60 * 60 * 1000),
  millisecondsEnd: Date.now(),
  numDivisions: 12,

  getDivisionLabels: function() {
    const results = [];

    for (let i = 0; i < 12; i++){
      results.unshift((new Date(this.millisecondsEnd + 1000 - ((i + 1) * 2 * 60 * 60 * 1000))).toLocaleTimeString() + '-' + (new Date(this.millisecondsEnd - (i * 2 * 60 * 60 * 1000))).toLocaleTimeString());
    }

    return results;
  },
  getIndex,
};};

export const twoDays = ()=>{ return {
  label: 'Past 48 Hours',
  millisecondsStart: Date.now() - (2 * 24 * 60 * 60 * 1000),
  millisecondsEnd: Date.now(),
  numDivisions: 12,

  getDivisionLabels: function() {
    const results = [];

    for (let i = 0; i < 12; i++){
      results.unshift((new Date(this.millisecondsEnd - (i * 4 * 60 * 60 * 1000))).toLocaleTimeString());
    }

    return results;
  },
  getIndex,
};};

export const oneWeek = ()=>{ return {
  label: 'Past 7 Days',
  millisecondsStart: Date.now() - (7 * 24 * 60 * 60 * 1000),
  millisecondsEnd: Date.now(),
  numDivisions: 7,

  getDivisionLabels: function() {
    const results = [];

    for (let i = 0; i < 7; i++){
      results.unshift(dayNames[(new Date(this.millisecondsEnd - (i * 24 * 60 * 60 * 1000))).getDay()]);
    }

    return results;
  },
  getIndex,
};};

export const userSpecified = (
  label = 'Test Label', 
  millisecondsStart = 0, 
  millisecondsEnd = Date.now(), 
  numDivisions = 1, 
  getDivisionLabels) => { 
  
  return {
    label,
    millisecondsStart,
    millisecondsEnd,
    numDivisions,

    getDivisionLabels,
    getIndex,
  };
};