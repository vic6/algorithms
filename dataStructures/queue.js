class Queue {
  constructor() {
    this.storage = {};
    this.count = 0;
  }
  enqueue(value) {
    this.storage[this.count++] = value;
  }
  dequeue() {
    if (!Object.keys(this.storage).length) return 'No items in Queue';
    const min = Math.min(...Object.keys(this.storage));
    const item = this.storage[min];
    delete this.storage[min];
    return item;
  }
}

let q = new Queue();
q.enqueue('paper');
q.enqueue('sauce');
q.enqueue('life time premier movie');
console.log(q);
