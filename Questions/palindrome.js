// let x = 123;

// let duplicate = 123;
// let reverse = 0;
// while (duplicate > 0) {
//   let lastDigit = duplicate % 10;
//   reverse = reverse * 10 + lastDigit;
//   duplicate = Math.floor(duplicate / 10);
// }
// if (reverse > 0 || reverse % 10 != 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//x=123

var isPalindrome = function (x) {
  let duplicate = x;
  let reverse = 0;
  while (duplicate > 0) {
    let lastDigit = duplicate % 10;
    reverse = reverse * 10 + lastDigit;
    duplicate = Math.floor(duplicate / 10);
  }
  return x == reverse; //ans=321
};
