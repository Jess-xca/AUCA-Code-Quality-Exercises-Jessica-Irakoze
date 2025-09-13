function getMatrixSum(matrix) {
  return matrix.reduce((sum, row) => 
    sum + row.reduce((rowSum, value) => rowSum + value, 0)
  , 0);
}
