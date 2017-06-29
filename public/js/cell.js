/*jshint esversion:6*/
function Cell(width, height, color) {
  this.height = height || 100;
  this.width = width || 100;
  this.text = '';
  this.color = color;
}

Cell.prototype.toHtml = function(){
  const div = document.createElement('div');
  div.style.height = `${this.height}px`;
  div.style.display = 'inline-block';
  div.style.width = `${this.width}px`;
  div.style.backgroundColor = this.color;
  div.style.border = '0.5px inset black';
  div.textContent = this.text;
  div.classList.add('cell');
  div.style.verticalAlign = "top";
  return div;
};
