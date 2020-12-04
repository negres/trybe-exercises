function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

/* function arrIndex(param) {
  let bigger = param[0];
  let indexOf = 0;

  for(let index = 1; index < param.length; index += 1) {    
    if (param[index] > bigger) {
      bigger = param[index];
      indexOf = index
    }
  }
  return indexOf;
}

console.log(arrIndex([6, 8, 20, 3])) */

