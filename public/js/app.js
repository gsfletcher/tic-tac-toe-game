/*jshint esversion:6*/
const App = {
  rootElement: '#app',
  numRows: 3,
  numCols: 3,
  cellWidth : 100,
  cellHeight: 100,
  grid: [],
  playerOne: true,
  start: function(){
    this.cacheDOM();
    this.makeGrid();
    this.render();
  },
  cacheDOM: function(){
    this.root = document.querySelector(this.rootElement);
    this.gridOutput = document.querySelector('.grid-output');
  },
  makeGrid: function(){
    this.grid = new Array(this.numRows);
    for (let rowIndex = 0; rowIndex < this.numRows; rowIndex += 1){
      this.grid[rowIndex] = new Array(this.numCols);
      for (let colIndex = 0; colIndex < this.numCols; colIndex += 1){
        this.grid[rowIndex][colIndex] = new Cell(this.cellHeight, this.cellWidth);
      }
    }
  },
  // bindEvents: function(){},
  render: function(){
    this.gridOutput.innerHTML = '';
    this.grid.forEach((row, rowIndex) => {
      const rowContainer = document.createElement('div');
      rowContainer.style.height = `${this.cellHeight}px`;
      row.forEach((cell, colIndex)=> {
        const element = cell.toHtml();
        rowContainer.appendChild(element);
      });
      this.gridOutput.appendChild(rowContainer);
    });
  },
};
App.start();
