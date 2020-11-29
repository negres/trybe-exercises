let salarioBruto = 3000.00;
let impostoRenda = 0;
let impostoInss = 0;


if (salarioBruto <= 1556.94) {
  impostoInss = salarioBruto * 0.08;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  impostoInss = salarioBruto * 0.09;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  impostoInss = salarioBruto * 0.11;
} else {
  impostoInss = 570.88
}

let salarioBase = salarioBruto - impostoInss;

if (salarioBase > 4664.68) {
  impostoRenda = 0.275 * salarioBase - 869.36;
} else if (salarioBase >= 3751.06) {
  impostoRenda = 0.225 * salarioBase - 636.13;
} else if (salarioBase >= 2826.66) {
  impostoRenda = 0.15 * salarioBase - 354.80;
} else if (salarioBase >= 1903.99) {
  impostoRenda = 0.075 * salarioBase - 142.80;
}

let salarioLiquido = salarioBase - impostoRenda;
console.log('Salário líquido: '+salarioLiquido);