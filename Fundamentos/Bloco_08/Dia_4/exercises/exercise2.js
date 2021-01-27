const assert = require('assert')

// escreva sum abaixo
// const sum = (...params) => {
//   let counter = 0;
//   for (let index = 0; index < params.length; index ++) {
//     counter += params[index];
//   }
//   return counter;
// }

const sum = (...numbers) => {
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)