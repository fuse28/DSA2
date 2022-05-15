//Q) Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

function romanToInteger(s) {
  let sum = 0;
  let map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  for (let i = 0; i < map.length; i++) {
    let num = map[i];
    let checkNum = map[i] + map[i + 1]; // checking special case (eg IV, IX etc)

    if (checkNum == map) {
      sum += map[checkNum];
      i++;
      continue;
    }
    sum += map[num];
  }
  return sum;
}
