// Initialization
export const data = ()=>{return {
  x: '',
  columns: [[]],
  // graph type
  type: 'line',
  //colors (set at load time)
};};

export const axis = ()=>{return {
  // x-axis
  x: {
    type: 'categories',
    categories: [],
    tick: {
      rotate: 90,
      multiline: true,
    },
    // height: 50,
  },
  // y-axis
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
  '#ef4444', // equivalent to tailwind red-500
  '#fb923c', // orange-400
  '#22c55e', // green-500
  '#60a5fa', // blue-400
  '#2dd4bf', // teal-400
  '#fde68a', // amber-200
  '#a78bfa', // violet-400
];