function compareTrue(arg, arg2) {
  if ((arg === true) && (arg2 === true)) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(true, true))
/**
 * --------------- 1 -------------------------------------------------
*/

function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(20, 25))
/**
 * -------------------- 2 --------------------------------------------
*/

function splitSentence(param) {
  return param.split(' ')
}

console.log(splitSentence('go Trybe'))
/**
 * -------------------------- 3 --------------------------------------
*/

function concatName(param) {
  let last = [...param].pop();
  let first = [...param].shift();
  let newArr = [last, first]
  return newArr.toString();
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

/**
 * -------------------------- 4 --------------------------------------
*/

function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

console.log(footballPoints(3, 20));
/**
 * -------------------------- 5 --------------------------------------
*/

function highestcount(param) {
  let highNumber = 0;
  let countNum = 0;  
  for(let index = 0; index < param.length; index += 1){
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

console.log(highestcount([9, 1, 2, 3, 9, 5, 7, 1, 9, 9]))

/**
 * -------------------------- 6 --------------------------------------
*/

function catAndMouse(cat1, cat2, mouse) {
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

console.log(catAndMouse(1, 2, 3))

/**
 * -------------------------- 7 --------------------------------------
*/

function fizzBuzz(param) {
  let arr = [];
  
  for (num of param) {
    switch (true) {
      case num % 3 !== 0 && num % 5 !== 0:
        arr.push('bug!');
        break;
      case num % 3 === 0 && num % 5 === 0:
        arr.push('fizzBuzz');
        break;
      case num % 3 === 0:
        arr.push('fizz');
        break;
      case num % 5 === 0:
        arr.push('buzz');
        break;
      default:
        arr.push('bug!')
    }
  }

  return arr;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]))

/**
 * -------------------------- 8 --------------------------------------
*/

