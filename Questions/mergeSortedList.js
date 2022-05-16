//Q) Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

var mergeTwoLists = function (list1, list2) {
  let current1 = list1;
  let current2 = list2;
  let newLinkedlistHead = null;
  let newLinkedlistTail = null;

  if (list1 == null) {
    return list2;
  }

  if (list2 == null) {
    return list1;
  }

  if (current1.val <= current2.val) {
    newLinkedlistHead = current1;
    current1 = current1.next;
  } else {
    newLinkedlistHead = current2;
    current2 = current2.next;
  }

  newLinkedlistTail = newLinkedlistHead;

  while (current1 != null && current2 != null) {
    if (current1.val <= current2.val) {
      newLinkedlistTail.next = current1;
      current1 = current1.next;
    } else {
      newLinkedlistTail.next = current2;
      current2 = current2.next;
    }
    newLinkedlistTail = newLinkedlistTail.next;
  }

  if (current1 != null) {
    newLinkedlistTail.next = current1;
  } else if (current2 != null) {
    newLinkedlistTail.next = current2;
  }

  return newLinkedlistHead;
};
