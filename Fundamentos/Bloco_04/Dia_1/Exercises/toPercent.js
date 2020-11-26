let noteToPercent = 0;

noteToPercent = 95;

if (noteToPercent < 50) {
  console.log('F')
} else if (noteToPercent >= 50 && noteToPercent < 60) {
  console.log('E')
} else if (noteToPercent >= 60 && noteToPercent < 70) {
  console.log('D')
} else if (noteToPercent >= 70 && noteToPercent < 80) {
  console.log('C')
} else if (noteToPercent >= 80 && noteToPercent < 90) {
  console.log('B')
} else if (noteToPercent >= 90 && noteToPercent <= 100) {
  console.log('A')
} else {
  console.log('A nota não pode ser maior que 100 e nem menor que 0')
}