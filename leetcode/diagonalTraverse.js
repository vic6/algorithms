/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  //Begin at 0, 0
  /**
   * while element to the right
   *  adavce row, grab value
   * advace column, decremtn row
   */
  let i = 0;
  let j = 0;
  let result = [];

  while (matrix[i][j]) {
    let val = matrix[i][j];
    result.push(val);
    if (matrix[i][j + 1]) {
      j++;
      
    }
  }
};