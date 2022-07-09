// Q) Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix.
//This matrix has the following properties:
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

//TODO medium

var searchMatrix = function (matrix, target) {
  let i = 0;
  let j = matrix[0].length - 1;

  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] === target) return true;
    if (matrix[i][j] < target) i++;
    else if (matrix[i][j] > target) j--;
  }
  return false;
};

//*one liner solution
//* ES2019 introduced the Array.prototype.flat() method that creates a new array with all the elements of the subarrays concatenated to it recursively up to a specified depth.
//! syntax => let newArray = arrayObject.flat([depth])

var searchMatrix = function (matrix, target) {
  return matrix.flat().includes(target);
};
