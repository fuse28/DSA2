// Q) There are n people standing in a queue, and they numbered from 0 to n - 1 in left to right order. You are given an array heights of distinct integers where heights[i] represents the height of the ith person.

// A person can see another person to their right in the queue if everybody in between is shorter than both of them. More formally, the ith person can see the jth person if i < j and min(heights[i], heights[j]) > max(heights[i+1], heights[i+2], ..., heights[j-1]).

// Return an array answer of length n where answer[i] is the number of people the ith person can see to their right in the queue.

// Input: heights = [10,6,8,5,11,9]
// Output: [3,1,2,1,1,0]
// Explanation:
// Person 0 can see person 1, 2, and 4.
// Person 1 can see person 2.
// Person 2 can see person 3 and 4.
// Person 3 can see person 4.
// Person 4 can see person 5.
// Person 5 can see no one since nobody is to the right of them.

//! question number 1944 of leetcode (HARD)

var canSeePersonCount = function (height) {
  let stack = [];
  let count = Array(height.length).fill(0);

  for (let i = 0; i < height.length; i++) {
    if (!stack.length) {
      stack.push(i);
      continue;
    }
    let value = height[i];

    while (value > height[stack[stack.length - 1]]) {
      //?index must be lower than i, so index can see i

      let index = stack.pop();
      count[index]++;

      //?if previous person before index exists, it must be taller than index, so previous can see the index

      let previous = stack[stack.length - 1];
      if (previous >= 0) {
        count[previous]++;
      }
    }
    stack.push(i);
  }
  while (stack.length) {
    let index = stack.pop();
    count[index]++;
  }
  count[count.length - 1] = 0;
  return count; //ans= [3,1,2,1,1,0]
};
