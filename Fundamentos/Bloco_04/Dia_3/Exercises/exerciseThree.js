let number = 5;

for (let index = 0; index < number; index += 1) {
  console.log(' '.repeat(number - index - 1)+'*'.repeat(index+1))
}