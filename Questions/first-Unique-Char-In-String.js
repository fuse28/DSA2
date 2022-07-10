// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

var firstUniqChar = function (s) {
  let count = new Map();

  for (let char of s) {
    if (count.has(char)) {
      count.set(char, count.get(char) + 1);
    } else {
      count.set(char, 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (count.get(s[i]) == 1) return i;
  }
  return -1;
};
