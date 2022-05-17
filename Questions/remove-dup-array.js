//Q) Input: nums = [0,0,1,1,1,2,2,3,3,4]
//Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicate(nums) {
  if (nums.lenght == 0) {
    return 0;
  }
  let uniqueEle = 0;
  nums.map((currentEle) => {
    if (currentEle != nums[uniqueEle]) {
      uniqueEle++;
      nums[(uniqueEle = currentEle)];
    }
  });
  return uniqueEle + 1;
}
