let pizzas = {
  sabor: 'Palmito',
  preco: 39.90,
  bordaCatupiry: true
};

for (let key in pizzas) {
  console.log(pizzas[key])
}

let pizzasDoces = ['Chocolate', 'Nutella', 'Banana']

for (let key in pizzasDoces) {
  console.log(key, pizzasDoces[key])
}