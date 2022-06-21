// Problem Statement
// Given an array; Your task is to find if there is a triplet present with the given sum.

// Input
// [1,2,5,6,7,8,3], sum = 8

// Output
// 1,2,5

function tripletSum(arr, sum) {
  let firstEle;
  let lastEle;

  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    firstEle = i + 1;
    lastEle = arr.length - 1;

    while (firstEle < lastEle) {
      if (arr[i] + arr[firstEle] + arr[lastEle] === sum) {
        console.log(arr[i] + "," + arr[firstEle] + "," + arr[lastEle]);
      } else if (arr[i] + arr[firstEle] + arr[lastEle] < sum) {
        firstEle++;
      } else {
        lastEle--;
      }
    }
  }
  console.log("no triplet found for given sum");
}
tripletSum([1, 2, 5, 6, 7, 8, 3], 8); //ans=1,2,5
