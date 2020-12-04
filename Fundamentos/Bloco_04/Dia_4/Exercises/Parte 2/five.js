function arr(param) {
  let numbers = {};

  for (let i = 0; i < param.length; i++) {
    let value = param[i];
    if (numbers[value] === undefined) {
      numbers[value] = 1;;
    } else {
      numbers[value] = numbers[value] + 1;
    }
  }

  let contRepeat = 0;
  let countNumber = 0;

  for (let prop in numbers) {
    if(contRepeat < numbers[prop]) {
      contRepeat = numbers[prop];
      countNumber = prop;
    }
  }

  return countNumber;
}

console.log(arr([2, 3, 2, 5, 8, 2, 3]));