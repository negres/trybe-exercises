function isPalindrome(param) {
  return param === param.split('').reverse().join('');
};

console.log(isPalindrome('arara')); 

/* USO DO SPLIT --> EXEMPLO

let str = 'Eu estou com bastante dificuldade'
console.log(str.split(' ')); 

-- outra forma: 

function verificaPalindrome(palavra) {
  let arrayLetras = palavra.split("");
  let isPalindrome = true;
  for (let index in arrayLetras) {
    if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}

*/