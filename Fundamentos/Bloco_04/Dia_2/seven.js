let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = Number();

for (let index = 0; index < numbers.length; index+= 1) {
  if(index >= 1) {
    if (numbers[index] < menor) {
      menor = numbers[index];
    }
  } else {
    menor = numbers[0];
  }
}

console.log(menor)