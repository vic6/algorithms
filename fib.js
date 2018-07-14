function fibonacci(n) {
  var nums = [0, 1];
  for (let i = 2; i <= n; i++) {
    nums.push(nums[nums.length - 1] + nums[nums.length-2]);
  }
  return nums[n];
}

function recurFib(n, cache={}) {
  if (n <= 1) return n;
  if (cache[n]) return cache[n];
  return recurFib(n - 1) + recurFib(n - 2);
}

console.log(fibonacci(5));
console.log(recurFib(5));


