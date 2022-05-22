//Q) Given an array in the range of 1 to n. Your task is to find the missing number from the array.
//For the last element, print -1

// Input
// [1,2,5,6,7,8,3]
// Output
// 4

function missingNumber(nums) {
  let n = nums.length;
  let sumTotal = Math.floor((n * (n + 1)) / 2);
  let sum = nums.reduce((a, b) => a + b);
  missingNum = sumTotal - sum;

  return missingNum; //ans = 4
}
missingNumber([1, 2, 5, 6, 7, 8, 3]);
