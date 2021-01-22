function minhaFuncao(...params) {
  return params;
}
const args = [0, 1];

console.log(minhaFuncao(-1, ...args, 2, ...[3]));

// pode juntar vários arrays em um só

const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: "Developer",
};

const customer = {...people, ...about};
console.log(customer); /* {
  id: 101,
  name: 'Alysson',
  age: 25,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
} */
//----------------------------------------
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Apple', 'Banana', 'Orange'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Chocolate', 'Potato', 'Lemon'];

const fruitSalad = (...params) => {
  // Esreva sua função aqui
  return params;
};

console.log(fruitSalad(...specialFruit, ...additionalItens));
