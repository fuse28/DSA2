class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToEnd(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
  removeFront() {
    if (this.head == null) {
      console.log("cannot remove from empty Linked List");
      return;
    }
    let data = this.head.data;
    this.head = this.head.next;
    return data;
  }
  top() {
    if (this.head !== null) {
      return this.head.data;
    }
  }
}

class Queue {
  constructor() {
    this.queue = new LinkedList();
  }
  enqueue(data) {
    this.queue.addToEnd(data);
  }

  dequeue() {
    return this.queue.removeFront();
  }

  front() {
    return this.queue.top();
  }
}

let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.dequeue()); //10
console.log(q.dequeue()); //20
console.log(q.dequeue()); //30
