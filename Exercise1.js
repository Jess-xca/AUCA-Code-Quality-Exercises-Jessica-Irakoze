function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, currentValue) => sum + currentValue, 0) / numbers.length;
}

