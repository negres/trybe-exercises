/**
 * querySelector recupera elementos
 */
let stack = document.querySelector('#stack');
stack.style.backgroundColor = 'red';

/* FUNÇÕES */

function styleColumn (columnPosition, color) {
  let column = document.getElementsByClassName('column_'+columnPosition)[0];
  column.style.backgroundColor = color;
}

function styleBigSquares (whichColumnClassName, color) {
  document.querySelectorAll(whichColumnClassName + '> div').forEach((element) => {
    element.style.backgroundColor = color;
  })
}

/* USANDO AS FUNÇÕES */

styleColumn('left', 'rgb(0, 191, 255)')
styleColumn('right', '#165428')

styleBigSquares('.column_left', '#FF00FF')
styleBigSquares('.column_right', '#8B008B	')

document.querySelectorAll('div>div>div>div').forEach((squares) => {
  squares.style.backgroundColor = 'rgb(255, 150, 0)';
})

document.querySelectorAll('#stack>div').forEach((element) => {
  let squares_top = document.querySelector('.' + element.className + '>div>div');
  squares_top.style.backgroundColor = 'pink';
})
