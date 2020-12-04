let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

function greeting() {
  return 'Bem vinda, ' + info.personagem;
}

console.log(greeting())