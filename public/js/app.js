/*jshint esversion:6*/
const App = {
  rootElement: '#app',
  numRows: 3,
  numCols: 3,
  cellWidth : 100,
  cellHeight: 100,
  grid: [],
  player: "X",
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
  playerPlays: function(rowIndex, colIndex){
    const cell = this.grid[rowIndex][colIndex];
    cell.text = this.player;
    this.changePlayer();
    this.render();
  },
  changePlayer: function(){
    if(this.player === "X") {
      this.player = "O";
    } else {
      this.player = "X";
    }
  },
  resetGrid: function(){
    this.makeGrid();
    this.render();
  },
  render: function(){
    this.gridOutput.innerHTML = '';
    // reset button
    const resetBtn = document.createElement('button');
    resetBtn.addEventListener('click', () => this.resetGrid());
    resetBtn.innerHTML = "Reset";
    resetBtn.classList.add = ('reset');
    this.gridOutput.appendChild(resetBtn);
    this.grid.forEach((row, rowIndex) => {
      const rowContainer = document.createElement('div');
      rowContainer.style.height = `${this.cellHeight}px`;
      row.forEach((cell, colIndex)=> {
        const element = cell.toHtml();
        element.addEventListener('click', () => this.playerPlays(rowIndex, colIndex));
        rowContainer.appendChild(element);
      });
      this.gridOutput.appendChild(rowContainer);
    });
  },
};
App.start();
