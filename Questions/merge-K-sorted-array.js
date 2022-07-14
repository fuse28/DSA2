// Q) Problem Statement
// GiveR different K sorted arrays having size n. Your task is to merge them and print sorted array

// Input
// K = 3, R = 4

// inputArray =
// [[2,5,6,8],
// [1,4,7,9],
// [0,10,11,12]]

// Output
// [0,1,2,3,4,5,6,7,8,9,10,11,12]

//keep merging two at at time till there is only one left (list.length===1)

var mergeKlists = function (lists) {
  if (lists.length === 0) {
    return null;
  }
  while (lists.length > 1) {
    let a = lists.shift();
    let b = lists.shift();
    let mergeAB = mergeList(a, b);
    lists.push(mergeAB);
  }
  return lists[0];
};

function mergeList(a, b) {
  let temp = new ListNode(0);
  let current = temp;

  while (a !== null && b !== null) {
    if (a.val < b.val) {
      current.next = a;
      a = a.next;
    } else {
      current.next = b;
      b = b.next;
    }
    current = current.next;
  }
  current.next = a || b;
  return temp.next;
}
