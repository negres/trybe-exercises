let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/* 
let position = Number();

for (let i= 1; i< numbers.length; i+= 1) {
  for (let j = 0; j < i; j += 1) {
    if (numbers[i] < numbers[j]) {
      position = numbers[j];
      numbers[j] = numbers[i]; 
      numbers[i] = position; 
    }
  }
}
console.log(numbers);
 */

/* console.log(numbers.sort(function(a, b){
   return a - b;
}))


console.log(numbers.sort(function(a, b){
  return b - a;
})) */

let newArr = [];

for (let index = 0; index < numbers.length; index += 1) {
  if ((index + 1) < numbers.length) {
    newArr.push(numbers[index] * numbers[index +1]);
  } else {
    newArr.push(numbers[index] * 2);
  }
}

console.log(newArr);