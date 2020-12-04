/* function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

console.log(footballPoints(3, 20)); 

function concatName(param) {
  let last = [...param].pop();
  let first = [...param].shift();
  return last +', '+first;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

*/


/* function highestcount(param) {
  let highNumber = 0;
  let countNum = 0;  
  for(let index = 0; index < param.length - 1; index += 1){
    let firstNum = param[index];
    for(let indexTwo = 1; indexTwo < param.length; indexTwo += 1) {
      let secondNum = param[indexTwo];
      
      if(highNumber < firstNum && highNumber < secondNum) {
        if(firstNum > secondNum) {
          highNumber = firstNum;
        } else {
          highNumber = secondNum;
        }
      }
    }
  }
  for(let indexThree = 0; indexThree < param.length; indexThree += 1) {
    if (param[indexThree] === highNumber) {
      countNum += 1;
    }
  }
  return countNum;
}

console.log(highestcount([9, 1, 2, 3, 9, 5, 7])) */


/* function catAndMouse(mouse, cat1, cat2) {
  let distanceCatOne = cat1 - mouse;
  let distanceCatTwo = cat2 - mouse;

  if(distanceCatOne < distanceCatTwo) {
    return 'cat1';
  } else if (distanceCatTwo < distanceCatOne) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }  
}

console.log(catAndMouse(1, 2, 2)) */


/* function fizzBuzz(param) {
  let arr = [];
  
  for(index = 0; index < param.length; index += 1) {
    if((param[index] % 5 === 0) && (param[index] % 3 === 0)) {
      arr.push('fizzBuzz');
    } else {
      if (param[index] % 3 === 0) {
        arr.push('fizz');
      } else if (param[index] % 5 === 0) {
        arr.push('buzz');
      } else if ((param[index] % 5) || (param[index] % 3 != 0)) {
        arr.push('bug!');
      }
    }
  }

  return arr;
}

console.log(fizzBuzz([2, 15, 7, 9, 45])) */



function highestcount(param) {
  let highNumber = 0;
  let countNum = 0;  
  for(let index = 0; index < param.length - 1; index += 1){
    for(let indexTwo = 0; indexTwo < param.length; indexTwo += 1) {
      if(param[index] > param[indexTwo]) {
        highNumber = param[index]
      } else if (param[index] < param[indexTwo]) {
        highNumber = param[indexTwo];
      }
    }
  }
  for (let index = 0; index < param.length; index += 1) {
    if (param[index] === highNumber) {
      countNum += 1;
    }
  }

  return countNum;
}

console.log(highestcount([9, 1, 2, 3, 9, 5, 7, 3]))