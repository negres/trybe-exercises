// parte I
// Crie uma função que receba um número e retorne seu fatorial.
const factorial = (number) => number === 0 || number === 1 ? 1 : number * factorial(number - 1);

console.log(factorial(4));

// forma antiga

/* function factorialTwo(number) {
  if ((number === 0) || (number === 1)) {
    return 1;
  } else {
    return number * factorialTwo(number - 1);
    // 4 * (4 - 1); 4 * (3 - 1); 4 * (2 - 1);
    // 4 * 3 * 2 * 1 = 24;
  }
} */

console.log(factorial(4));

// parte II
// Crie uma função que receba uma frase e retorne qual a maior palavra.

const biggestWord = (phrase) => {
  const arrayWords = phrase.split(' ');
  let bigger = 0;
  let result = '';
  arrayWords.forEach((word) => {
    if (bigger < word.length) {
      bigger = word.length;
      result = word;
    }
  });
  return result;
};

console.log(biggestWord('MaiorBiggerUltra é uma frase!'));

// parte IV

/* Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string . */

const findLetterX = (param) => {
  const string = 'Tryber x aqui!';
  const result = string.replace('x', param);
  return result;
};
// console.log(findLetterX('Natália'));

// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

var skills = [
  'Linux',
  'Git',
  'HTML',
  'CSS',
  'Javascript'
];

console.log(skills);

/* Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string . */

const concatena = (param) => {
  const newSkills = skills.sort();
  return `${findLetterX(param)} Minhas cinco principais habilidades são: ${newSkills}`;
};

console.log(concatena('Natália'));
