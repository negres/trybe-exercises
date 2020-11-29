let number = 5;

for (let index = 0; index < number; index += 1) {
  console.log('*'.repeat(index+1)+' '.repeat(number-index-1))
}
