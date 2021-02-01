const inputCep = document.querySelector('#cep');
const btnCep = document.querySelector('#btn-busca-cep');
const resultCep = document.querySelector('.result');

const handleClick = (event) => {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

const buscaCep = (cep) => {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.text())
    .then(body => {
      resultCep.innerText = body;
    })
}

btnCep.addEventListener('click', handleClick);