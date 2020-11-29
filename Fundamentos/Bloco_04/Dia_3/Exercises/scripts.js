let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index+= 1) {
  sum += fruits[index];
}

if (sum > 15) {
  console.log('Valor da soma: ' + sum);
} else {
  console.log('Valor menor que 16');
}

