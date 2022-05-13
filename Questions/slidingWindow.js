//Q) Given an array arr and an integer K, find the maximum for each and every contiguous subarray of size k.

//Input: nums = [1,3,-1,-3,5,3,6,7], K = 3
//Output: [3,3,5,5,6,7]

var maxSlidingWindow = function (nums, k) {
  let deque = [];
  let ans = [];
  for (let i = 0; i < k; i++) {
    while (deque.length != 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    deque.push(i);
  }
  ans.push(nums[deque[0]]);

  for (let i = k; i < nums.length; i++) {
    if (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();
    }
    while (deque.length != 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    deque.push(i);
    ans.push(nums[deque[0]]);
  }

  return ans;
};
