function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// MEU CÓDIGO 
// EXERCÍCIO 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let daysUl = document.querySelector('#days');

for (let item of dezDaysList) {
  
  let daysItems = item;
  let listDecDays = document.createElement('li');
  listDecDays.className = 'day'  
  listDecDays.innerText = daysItems;
  if (daysItems === 24 || daysItems === 25 || daysItems === 31) {
    listDecDays.classList.add('holiday')
  }
  if (daysItems === 4 || daysItems === 11 || daysItems === 18 || daysItems === 25){
    listDecDays.classList.add('friday')
  }
  
  document.querySelector('#days').appendChild(listDecDays);
}

// EXERCÍCIO 2
function createBtnHolidays(param) {
  let buttonHoliday = document.createElement('button');
  buttonHoliday.id = 'btn-holiday';
  buttonHoliday.innerText = param;
  document.querySelector('.buttons-container').appendChild(buttonHoliday);
}
createBtnHolidays('Feriados')

// EXERCÍCIO 3
function btnChangeColorHoliday () {
  let changeColorHolidays = document.querySelectorAll('.holiday');
  for (days of changeColorHolidays) {
    if (days.style.backgroundColor === '') {
      days.style.backgroundColor = 'green';
      days.style.color = 'white';
    } else if (days.style.backgroundColor === 'green') {
      days.style.backgroundColor = '';
      days.style.color = '';
    }
  }
}
let changeColorBtnHoliday = document.querySelector('#btn-holiday').addEventListener('click', btnChangeColorHoliday);

// EXERCÍCIO 4
function createBtnFridays(param) {
  let buttonFriday = document.createElement('button');
  buttonFriday.id = 'btn-friday';
  buttonFriday.innerText = param;
  document.querySelector('.buttons-container').appendChild(buttonFriday);
}
createBtnFridays('Sexta-feira');

// EXERCÍCIO 5
let dezFridays = [ 4, 11, 18, 25 ];
function btnFriday () {
  let fridays = document.querySelectorAll('.friday');
  let newTextInFridays = 'SEXTOU!!!';  
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerText !== newTextInFridays) {
      fridays[index].innerText = newTextInFridays;
    } else {
      fridays[index].innerText = dezFridays[index];
    }
  }
}
let changeTextBtnFriday = document.querySelector('#btn-friday').addEventListener('click', btnFriday);

// EXERCÍCIO 6

function zoomDayIn () {
  let daysZoomIn = document.querySelectorAll('.day');  
  for (day of daysZoomIn){
    day.addEventListener('mouseover', function (event) {
      event.target.style.fontSize = '30px';
    })
  }
}

function zoomDayOut () {
  let daysZoomIn = document.querySelectorAll('.day');
  for (day of daysZoomIn){
    day.addEventListener('mouseout', function (event) {
      event.target.style.fontSize = '20px';
    })
  }
}

zoomDayIn();
zoomDayOut();

// EXERCÍCIO 7

function addNewTask(param) {
  let mytask = document.createElement('span')
  mytask.innerText = param;
  document.querySelector('.my-tasks').appendChild(mytask);
}
addNewTask('cozinhar')

// EXERCÍCIO 8
function addSubtitle(param) {
  let colorDiv = document.createElement('div');
  colorDiv.className = 'task';
  colorDiv.style.backgroundColor = param;
  document.querySelector('.my-tasks').appendChild(colorDiv);
}
addSubtitle('green');

// EXERCÍCIO 9
function selectedSubtitleSpan () {
  let element = document.querySelector('.task');
  element.addEventListener('click', function () {
    if (element.className === 'task selected'){
      element.className = 'task';
      console.log('nao esta selecionada')
    } else if (element.className === 'task') {
      element.classList.add('selected')
      console.log('selecionada')
    }    
  })
}
selectedSubtitleSpan()

// EXERCÍCIO 10
function selectedTaskDay () {
  let selectDays = document.querySelectorAll('.day');
  let colorSubtitleSpan = document.querySelector('.task').style.backgroundColor
  for (let day = 0; day < selectDays.length; day +=1) {
    selectDays[day].addEventListener('click', function () {     
      if (selectDays[day].style.backgroundColor === colorSubtitleSpan) {
        selectDays[day].style.backgroundColor = '';
        selectDays[day].style.color = ''
      } else {
        selectDays[day].style.backgroundColor = colorSubtitleSpan
        selectDays[day].style.color = 'white'
      }
    })
  }
}
selectedTaskDay()

// EXERCÍCIO BONUS
// task-input = campo input
// btn-add = button
// task-list-container

function addAppointment () {
  let textAppointment = document.querySelector('#task-input');
  let addAppointments = document.querySelector('#btn-add');
  let taskListContainer = document.querySelector('.task-list');

  addAppointments.addEventListener('click', function () {

    if (textAppointment.value.length > 0) {
      let newTagLi = document.createElement('li');
      newTagLi.innerText = textAppointment.value;

      taskListContainer.appendChild(newTagLi);
      textAppointment.value = '';
    } else {
      alert('Digite ao menos 1 caractere.')
    }
  })

  textAppointment.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && textAppointment.value.length > 0) {
      let newTagLi = document.createElement('li');
      newTagLi.innerText = textAppointment.value;

      taskListContainer.addEventListener(newTagLi);
      textAppointment.value = '';
    }
  })
}
addAppointment ();

