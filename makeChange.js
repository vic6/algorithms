// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.

// coin values: 5, 10, 25


const makeChange = (coins, num) => {
  let numCoins = 0;
  coins = coins.sort((a,b) => b - a);
  console.log(coins);
  while (num >= 0) {
    for (let coin of coins) {
      // console.log(coin);
      if(num > coin) {
        num -= coin;
        // console.log(num);
        numCoins ++;
      }
    }
  }
  return numCoins;
};

// let x = [3,4,6];
// x = x.sort((a,b) => b- a);
// for (let num of x) {
//   console.log(num);
// }

console.log(makeChange([5,10,25], 40));
