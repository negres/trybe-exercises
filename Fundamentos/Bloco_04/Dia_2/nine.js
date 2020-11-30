let arr = [];

for (let index = 1; index <= 25; index += 1) {
  arr.push(index);
}
console.log(arr);

let newArr = [];

for (let index = 1; index < arr.length; index += 1) {
  newArr.push(index / 2);
}
console.log(newArr);