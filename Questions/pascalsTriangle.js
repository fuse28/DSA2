//Q) Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

var generate = function (numRows) {
  //   create an array to hold each array of the rows
  let pascalsArr = [];

  // will loop through the numRows as the range
  for (let i = 0; i < numRows; i++) {
    //     declared an array that will hold pascals value for that row and then be pushed to pascalsArr
    let arr = [];

    //     loop through the array to add elements to arr
    for (let j = 0; j < i + 1; j++) {
      //       the first and last value of each arr is 1
      if (j === 0 || j === i) arr.push(1);
      else arr.push(pascalsArr[i - 1][j - 1] + pascalsArr[i - 1][j]);
    }
    pascalsArr.push(arr);
  }

  return pascalsArr;
};
