/**
 * ************************************
 *
 * @module  
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
  '#FFA2A2', // ERROR
  '#E9C4B8', // 
  '#E6C15E', // 
  '#26D8EA', // 
  '#5DDA4E', // 
  '#D9BDF5', // 
  '#B6D9D5', // SILLY
];