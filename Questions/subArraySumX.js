// Q) Problem Statement
// Given an array having positive and negative numbers. You need to find a number of subarrays having
// sum as x. For Example -

// Input
// {2, 4, -1, -2, 4, -5, 5}, sum = 6

// Output
// Index 0 to 1

function subArraySumX(nums, k) {
  let currentSum = 0;
  let res = 0;
  let preSum = new Map();

  preSum.set(0, 1);

  for (let n of nums) {
    currentSum += n;

    if (preSum.get(currentSum - k)) {
      res += preSum.get(currentSum - k);
    }
    preSum.set(currentSum, (preSum.get(currentSum) ?? 0) + 1);
  }
  console.log(res); //ans = 1
}
subArraySumX([2, 4, -1, -2, 4, -5, 5], 6);
