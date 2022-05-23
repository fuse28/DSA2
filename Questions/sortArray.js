// Pro@lem Statement
//Q)  Given an array having 0,1,2 .We need to write a function that sorts the array in ascending order
// without using inbuilt sort function

// Input
// [1, 1, 1, 2, 0, 0, 0]
// Output
// [ 0, 0, 0, 1, 1, 1, 2]

function sortArray(nums) {
  let n = nums.length;
  let start = 0;
  let mid = 0;
  let end = n - 1;
  let temp = 0;

  while (mid <= end) {
    if (nums[mid] === 0) {
      temp = nums[start];
      nums[start] = nums[mid];
      nums[mid] = temp;
      mid++;
      start++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      temp = nums[end];
      nums[end] = nums[mid];
      nums[mid] = temp;
      end--;
    }
  }
  console.log(nums);
}
sortArray([1, 1, 1, 2, 0, 0, 0]);
