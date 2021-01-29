// const assert = require('assert');

// const pushNumber = (list, number) => {
//   list.push(number);
//   console.log(list);
// };

// let numbers = [];
// setTimeout recebe numeros em milisegundos. 5000 = 5 segundos
// const secondsAsync = 5000;

// setTimeout(() => pushNumber(numbers, 1), secondsAsync * 2);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// setTimeout(() => assert.deepStrictEqual(numbers, [2, 3, 1]), secondsAsync);
// aqui irá falha
// a execução da linha 12 será feito 5 segundos depois do teste
// por isso o mesmo dará um erro

const resultadoFinal = (resultado) => {
  console.log(resultado);
}

// const funcaoSoma = (num1, num2) => {
//   let soma = num1 + num2;
//   resultadoFinal(soma);
// };

// funcaoSoma(10, 8);

// Função callback

const funcaoSoma = (num1, num2, funcaoCallback) => {
  let soma = num1 + num2;
  funcaoCallback(soma);
};

funcaoSoma(10, 8, resultadoFinal);