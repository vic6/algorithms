/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let cache = { 0: 1, 1: 1 };
  let nums = [0, 1];
  if (n <= 1) return 1;
  for (let i = 1; i <= n; i++) {
    let num = nums[nums.length - 1] + nums[nums.length - 2];
    nums.push(num);
    cache[i] = num;
  }
  return cache[n - 1] + cache[n - 2];
};

const fib = n => {
  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result.push(result.length - 1 + result.length - 2);
  }
  console.log(result);
  return result[result.length - 1];
};

console.log(climbStairs(1));
