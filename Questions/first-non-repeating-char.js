let s = "abab";
let map = {};

let k = 0;
for (let i = 0; i < s.length; i++) {
  if (map[s[i]] == undefined) {
    map[s[i]] = 1;
  } else {
    map[s[i]]++;
  }
  let nonRepeatingChar = -1;
  while (k <= i) {
    if (map[s[k]] == 1) {
      nonRepeatingChar = s[k];
      break;
    }
    k++;
  }
  console.log(map);
  console.log(nonRepeatingChar); //ans= a a b -1
}

// function print(arr, k) {
// 	let qi = [];
// 	let i;

// 	for (i = 0; i < k; i++) {
// 		while (qi.length != 0 && arr[i]  >= arr[qi[qi.length - 1]]) {
// 			qi.pop();
// 		}
// 		qi.push(i);
// 	}
// 	// console.log("i",i, qi)

// 	for (; i < arr.length; i++) {
// 		console.log(arr[qi[0]]);

// 		while (qi.length != 0 && qi[0] <= i - k) {
// 			qi.shift();
// 		}

// 		while (qi.length != 0 && arr[i] >= arr[qi[qi.length - 1]]) {
// 			qi.pop();
// 		}

// 		qi.push(i);
// 	}
// 	console.log(arr[qi[qi.length - 1]]);
// }
