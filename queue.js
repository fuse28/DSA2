class Queue {
  constructor() {
    this.arr = [];
  }
  enqueue(value) {
    this.arr.push(value);
  }
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    } else {
      return this.arr.shift();
    }
  }
  isEmpty() {
    return this.arr.length === 0;
  }

  front() {
    return this.arr[0];
  }

  display() {
    for (let i = 0; i < this.arr.length; i++) {
      console.log(this.arr[i]);
    }
  }
}
let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

queue.display();
