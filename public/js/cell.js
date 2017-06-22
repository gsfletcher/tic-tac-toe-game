/*jshint esversion:6*/
function Cell(width, height) {
  this.height = height || 100;
  this.width = width || 100;
  this.text = '';
}

Cell.prototype.toHtml = function(){
  const div = document.createElement('div');
  div.style.height = `${this.height}px`;
  div.style.display = 'inline-block';
  div.style.width = `${this.width}px`;
  div.style.border = '0.5px solid black';
  div.textContent = this.text;
  return div;
};
