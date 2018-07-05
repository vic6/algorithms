class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }
  push(item) {
    this.storage[this.count++] = item;
    return this.storage;
  }
  pop() {
    if (this.count === 0) return 'No items in storage';
    this.count--;
    let item = this.storage[this.count];
    delete this.storage[this.count];
    return item;
  }
  peek() {
    if (this.count === 0) return 'No items in storage';
    let item = this.storage[this.count - 1];
    return item;
  }
}

let parens = { '(': ')'};
let stack = [];

function checkParens(s) {
  for(let char of s) {
    if (char === '(') stack.push(')');
    if(char === ')') {
      if (stack.pop() !== char) return false;
    }
  }
  return (stack.length === 0);
}

// console.log(checkParens('()())'));

class Stack2 {
  constructor() {
    this._storage = {};
    this._count = 0;
  }
  push(value) {
    this._storage[this._count++] = value;
  }
  pop() {
    if (this._count === 0) return 'Stack is empty';
    const item = this._storage[--this._count];
    delete this._storage[this._count];
    return item;
  }
  peek() {
    if (this._count === 0) return 'Stack is empty';
    const item = this._storage[this._count - 1];
    return item;
  }
}

let s = new Stack2();
s.push('hello');
s.push('dog');
s.push('ice cream');
console.log(s);
