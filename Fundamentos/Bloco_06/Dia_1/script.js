// Selectors

const btnSubmit = document.querySelector('#btn-submit');
const btnReset = document.querySelector('#btn-reset');
const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];


// Functions

function fillStates() {
  const selectTag = document.querySelector('#state')
  for (let index = 0; index < states.length; index += 1) {
    const opt = document.createElement('option');
    opt.innerText = states[index];
    selectTag.appendChild(opt);
  }
}
fillStates();

function checkDay() {
  const date = document.querySelector('#day').value;
  const day = Number(date);
  if (day >= 1 && day <= 31) {
    return true;
  }
  alert('O dia escolhido é inválido');
  return false;
}

function checkMonth() {
  const date = document.querySelector('#month').value;
  const month = Number(date);
  if (month >= 1 && month <= 12) {
    return true;
  }
  alert('O mês escolhido é inválido');
  return false;
}

function checkYear() {
  const date = document.querySelector('#year').value;
  const year = Number(date);
  if (year >= 1 && year <= 2020) {
    return true;
  }
  alert('O ano escolhido é inválido');
  return false;
}

function showValues() {
  const arrValues = document.querySelectorAll('input');
  for (let index = 0; index < arrValues.length; index += 1) {
    const div = document.createElement('div');
    div.className = 'values-div';
    div.innerText = arrValues[index].value;
    document.body.appendChild(div);
  }
}

function deleteShowValues() {
  const div = document.querySelectorAll('.values-div');
  for (let index = 0; index < div.length; index += 1) {
    div[index].remove();
  }
}

function checkAll() {
  btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    if (checkDay() && checkMonth() && checkYear()) {
      if (document.querySelector('.values-div')) {
        deleteShowValues();
      }
      showValues();
    }
  });
}
checkAll();

// Event listener

btnReset.addEventListener('click', deleteShowValues);
