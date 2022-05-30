//Problem Statement
//Q)  Given an array. You need to find the length of the longest consecutive sequence, such that elements are
// consecutive integers. For example -

// Input
// {35, 3, 4, 88, 9, 10, 21, 5, 6}
// Output
// 4

// Sequence is 3,4,5,6

function longestCommonSubsequence(nums) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  const set = new Set(nums);
  let maxSequence = 0;
  for (let num of set) {
    if (set.has(num - 1)) {
      continue;
    }
    let currentNum = num;
    let currentMax = 1;

    while (set.has(currentNum + 1)) {
      currentNum++;
      currentMax++;
    }
    maxSequence = Math.max(maxSequence, currentMax);
  }
  console.log(maxSequence); //ans = 4
}
longestCommonSubsequence([35, 3, 4, 88, 9, 10, 21, 5, 6]);
