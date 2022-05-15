//Q) Input: strs = ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function (strs) {
  let longestCommonPrefix = "";
  let lscStillGoing = true;
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (char != strs[j][i]) {
        lscStillGoing = false;
        break;
      }
    }
    if (lscStillGoing == true) {
      longestCommonPrefix = longestCommonPrefix + char;
    } else {
      break;
    }
  }
  return longestCommonPrefix;
};
