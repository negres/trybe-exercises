const btnSubmit = document.querySelector('#btn-submit');
const select = document.querySelector('#state');

const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];


// Objeto com os dados

function preencherEstados() {
  for(let index = 0; index < states.length; index += 1) {
    const opt = document.createElement('option');
    opt.innerText = states[index];
    select.appendChild(opt);
  }
}
preencherEstados();
