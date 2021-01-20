const assert = require('assert');

const greaterThanTen = (array) => {
  const newArr = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.deepStrictEqual(greaterThanTen(parameter), result);