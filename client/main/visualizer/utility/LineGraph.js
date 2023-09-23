// wraps a c3 chart within an object for bulk modification
// If internaldata is mutated directly ensure proper reloading of graph

// Constructor (bindID) 
//  The ID of the DOM element to bind to.
// applyGraphChanges()
//  Constructs/Reconstructs the graph.  
// Clear() 
//  Removes all cached data from graph
// Graph(label, yData)
//  Caches an additional graph rows
// loadData()
//  Applies cached changes 

import c3 from 'c3';
import { data, axis, grid, tooltip, columns, categories, colors } from './lineGraphDefaults';
import levelToInd from './levelTypeToIndex';


class LineGraph {
  constructor(bindID) {
    //Permanent local for modification of graph
    this.bindID = bindID;
    this.chart = null;

    //Requires reinitialization of graph
    this.data = data();
    this.axis = axis();
    this.grid = grid();
    this.tooltip = tooltip();

    //Requires data load of graph
    this.columns = columns();
    this.categories = categories();
    this.colors = null;

    //Utility
    this.availableColors = colors();
  }

  applyGraphChanges() {
    this.chart = c3.generate({
      bindto: document.querySelector(`#${ this.bindID }`),
      tooltip: this.tooltip,
      data: this.data,
      axis: this.axis,
      grid: this.grid,
    });
  }

  clear() {
    this.columns = [];
    this.colors = null;
  }

  Graph(label, data) {
    this.columns.push([label, ...data]);
  }

  setXLabels(newLabels) {
    this.categories = newLabels;
  }

  setColorData(newColors) {
    this.colors = newColors;
  }

  genColorData() {
    const localColors = {};

    let i = 0;
    for (const col of this.columns){
      const predefinedColorIndex = levelToInd(col[0]);

      if (predefinedColorIndex !== undefined){
        localColors[col[0]] = this.availableColors[predefinedColorIndex];
      }
      else{
        localColors[col[0]] = this.availableColors[i % this.availableColors.length];
      }

      i++;
    }

    this.colors = localColors;
  }

  loadData() {
    if (!this.chart) return;
    
    if (this.colors) {
      return this.chart.load({
        columns: this.columns,
        categories: this.categories,
        colors: this.colors,
        unload: true,
      });
    }
    
    this.chart.load({
      columns: this.columns,
      categories: this.categories,
      unload: true,
    });
  }
}

export default LineGraph;