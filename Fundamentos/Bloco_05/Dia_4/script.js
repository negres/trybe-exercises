// MUDAR A COR DE FUNDO
function changeBgColor (color) {
  let container = document.querySelector('body');
  container.style.backgroundColor = color;
  localStorage.setItem('backgroundColor', color);
}
// changeBgColor('#c5c6c9')

function changeTextColor (color) {
  let text = document.querySelectorAll('p');
  for (let index = 0; index < text.length; index += 1) {
    text[index].style.color = color;
  }  
}
changeTextColor('purple');

function changeFontSize (sizeFont, element) {
  let fontSize = document.querySelectorAll(element);
  for (let index = 0; index < fontSize.length; index += 1) {
    fontSize[index].style.fontSize = sizeFont;
  }
}
changeFontSize('18px', 'p');

function changeLineHeight (lineHeigth, element) {
  let heigth = document.querySelectorAll(element);
  for (let index = 0; index < heigth.length; index += 1) {
    heigth[index].style.lineHeight = lineHeigth;
  }
  
}
changeLineHeight('1.5', 'p');

function changeFont (fontType) {
  let font = document.querySelectorAll('body')
  for (let index = 0; index < font.length; index += 1) {
    font[index].style.fontFamily = fontType;
  }
}
changeFont('Arial');


let btnBgColor = document.querySelectorAll('.change-bg-color>button');
for (let index = 0; index < btnBgColor.length; index += 1) {
  btnBgColor[index].addEventListener('click', function (event) {
    changeBgColor(event.target.innerHTML);
  })
}