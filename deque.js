class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
  }
}
class DoublyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addFront(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
  }

  removeFront() {
    if (this.head === null) {
      console.log("empty linked list");
      return;
    }

    let data = this.head.data;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    } else {
      this.head.previous = null;
    }
    return data;
  }

  addToFront(data) {
    let newNode = new Node(data);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
  }
  removeLast() {
    this.tail.previous = newNode;
    this.tail.next = null;
  }
}

let dLL = new DoublyLinkList();

console.log(dLL.addToFront(10));
console.log(dLL.addToFront(20));
console.log(dLL.addToFront(30));
console.log(dLL.addFront(9));
console.log(dLL.addFront(8));
console.log(dLL.addFront(7));

//7 8 9 10 20 30

console.log(dLL.removeFront());
console.log(dLL.removeFront());
console.log(dLL.removeFront());
console.log(dLL.removeFront());
console.log(dLL.removeFront());
console.log(dLL.removeFront());
console.log(dLL.removeFront());
//7 8 9 10 20 30
