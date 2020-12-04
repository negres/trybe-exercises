function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (let indice in palavras) {
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }
  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


/* function arrStrings(param) {
  let maior = "";
  let comprimento = 0;
  
  for (i = 0; i < param.length; i++) {
    if (param[i].length > comprimento) {
      comprimento = param[i].length;
      maior = param[i]
    }
  }
  return maior;
}

console.log(arrStrings(['NataliaNegreiros', 'Jerra', 'Luke','Pitagoras'])); */