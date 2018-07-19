function changePossibilities(coins, amount) {
  let matrix = [];
  for (let i = 0; i <= coins.length; i++) {
    matrix.push(Array(amount + 1));
    for (let j = 0; j <= amount; j++) {
      if (i === 0 && j === 0) {
        matrix[i][j] = 1;
      } else if (i === 0) {
        matrix[0][j] = 0;
      } else {
        var valExcludingNewCoin = matrix[i - 1][j];
        //new coin is greater than amount
        if (coins[i - 1] > j) {
          matrix[i][j] = valExcludingNewCoin;
        } else {
          // new coin is <= amount
          var valIncludingNewCoin = matrix[i][j - coins[i - 1]];
          matrix[i][j] = valExcludingNewCoin + valIncludingNewCoin;
        }
      }
      {
      }
    }
  }
  console.table(matrix);
  console.log(matrix[coins.length][amount]);
  return matrix[coins.length][amount];
}