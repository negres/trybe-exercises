let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
media = sum / numbers.length;
if (media > 20) {
  console.log('Valor maior que 20: '+media)
} else {
  console.log('Valor menor que 20 '+media)
}