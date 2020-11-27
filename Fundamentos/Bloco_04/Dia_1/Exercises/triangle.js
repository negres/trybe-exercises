let angleA = 50;
let angleB = 50;
let angleC = 80;

if (angleA + angleB + angleC == 180) {
  console.log('Ângulos são de um triângulo');
  return true;
} else if (angleA + angleB + angleC < 180){
  console.log('Ângulos não são de um triâgulo');
  return false;
} else {
  console.log('Erro.');
}