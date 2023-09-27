/**
 * ************************************
 *
 * @module  levelToInd
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/20/2023
 * @description A set of default values for C3 graphs for use with a LineGraph.
 * 
 * ************************************
 */

// Initialization
export const data = ()=>{return {
  x: '',
  columns: [[]],
  type: 'line',
};};

export const axis = ()=>{return {
  x: {
    type: 'categories',
    categories: [],
    tick: {
      rotate: 90,
      multiline: true,
    },
    // height: 50,
  },
  y: {
    label: {
      text: 'Counts',
      position: 'outer-middle',
    },
  },
};};

export const grid = ()=>{return {
  x: {
    show: true,
    color: '#000000',
  },
  y: {
    show: true,
    color: '#000000',
  },
};};

export const tooltip = ()=>{return {
  position: function (data, width, height, element) {
    return {top: 0, left: 0};
  }
};};

// Update Only
export const columns = ()=>[[]];//Must be an array

export const categories = ()=>[];//Must be an array

// Utility
export const colors = ()=>[
  '#C31212', // RED
  '#EA660C', // ORANGE
  '#40AA13', // GREEN
  '#2F6EFF', // BLUE
  '#edd000', // YELLOW
  '#A838C1', // PURPLE
  '#fd30d7', // PINK
];