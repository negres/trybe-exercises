const assert = require('assert');

const greetPeople = (people) => {
  const newArr = [];
  let greeting = 'Hello';

  for (const person in people) {
    newArr.push(`${greeting} ${people[person]}`);
  }
  return newArr;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);