// function calculateAverage(numbers) {
//   if (numbers.length === 0) {
//     return 0;
//   }
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum / numbers.length;
// }
function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, currentValue) => sum + currentValue, 0) / numbers.length;
}

const numbers = [1, 2, 3, 4];
console.log(calculateAverage(numbers)); // 2.5
