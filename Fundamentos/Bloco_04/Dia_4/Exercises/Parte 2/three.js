function indiceDoMenor(numeros) {
  let indiceMenor = 0;
  for (let indice in numeros) {
    if (numeros[indiceMenor] > numeros[indice]) {
      indiceMenor = indice;
    }
  }
  return indiceMenor;
}

console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));

/* function arrIndex(param) {
  let smaller = param[0];
  let indexOf = 0;

  for(let index = 1; index < param.length; index += 1) {    
    if (param[index] < smaller) {
      smaller = param[index];
      indexOf = index
    }
  }
  return indexOf;
}

console.log(arrIndex([-3, 8, 20, 3])) */