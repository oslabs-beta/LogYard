function getIndex(millisecondsEpoc) {
  const intervalWidth = ((this.millisecondsEnd - this.millisecondsStart) / this.numDivisions);

  return Math.floor((millisecondsEpoc - this.millisecondsStart) / intervalWidth );
}

export const oneDay = ()=>{return {
  label: 'Past 24 Hours',
  millisecondsStart: Date.now() - (24 * 60 * 60 * 1000),
  millisecondsEnd: Date.now(),
  numDivisions: 12,

  getDivisionLabels: function() {
    return [];
  },
  getIndex,
};};

export const twoDays = ()=>{ return {
  label: 'Past 48 Hours',
  millisecondsStart: Date.now() - (2 * 24 * 60 * 60 * 1000),
  millisecondsEnd: Date.now(),
  numDivisions: 12,

  getDivisionLabels: function() {
    return [];
  },
  getIndex,
};};

export const oneWeek = ()=>{ return {
  label: 'Past 7 Days',
  millisecondsStart: Date.now() - (7 * 24 * 60 * 60 * 1000),
  millisecondsEnd: Date.now(),
  numDivisions: 7,

  getDivisionLabels: function() {
    return [];
  },
  getIndex,
};};