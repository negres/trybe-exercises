const greeting = (user = 'user') => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

// --------------

const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8, 2));