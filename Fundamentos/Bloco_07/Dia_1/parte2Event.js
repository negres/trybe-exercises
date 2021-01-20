const counterButton = document.querySelector('#btn-counter');
const counterReverseButton = document.querySelector('#btn-counter-reverse');
let counterh1 = document.querySelector('#counter-title');
let clickCount = 0;

// Incrementar a cada click
const clickCounter = () => {
  clickCount += 1;
  counterh1.innerText = `${clickCount}`;
}

// Decrementar a cada click
const clickCounterReverse = () => {
  clickCount -= 1;
  counterh1.innerText = `${clickCount}`
}

counterButton.addEventListener('click', clickCounter);
counterReverseButton.addEventListener('click', clickCounterReverse);
