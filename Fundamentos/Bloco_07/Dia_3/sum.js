const assert = require('assert');

const sum = (num1, num2) => num1 + num2;

const expected = sum(5, 5);

assert.strictEqual(expected, 9, `O valor esperando é 9!`);

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK

/* function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  };
  return a + b;
};

const expected = sum(4, '5');

assert.strictEqual(expected, 0, 'O valor esperando é 9!'); */