// Q) Problem Statement Given a sorted array. Your task is to reduce it such that,
// each element can appear maximum twice.

// Input
// [ 1,2,2,3,3,3,4,4,6]
// Output
// [1,2,2,3,3,4,4,6]

function appearTwice(nums) {
  let p1 = 2; //slow pointer
  let p2 = 2; //fast pointer

  while (p2 < nums.length) {
    if (nums[p2] !== nums[p1 - 2]) {
      nums[p1] = nums[p2];
      p1++;
    }
    p2++;
  }
  return p1; //ans 7
}
appearTwice([1, 2, 2, 3, 3, 3, 4, 4, 6]);
