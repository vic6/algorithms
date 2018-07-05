// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
//
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }
//
// let list1 = new ListNode(1);
// list1.next = new ListNode(2);
// list1.next.next = new ListNode(4);
//
// let list2 = new ListNode(2);
// list1.next = new ListNode(3);
// list1.next.next = new ListNode(5);
//
// function mergeTwoLists(l1, l2) {
//
//   let result = new ListNode(0);
//   function recurse(l1, l2) {
//     if (!l1.next) return result.next = l2;
//     if (!l2.next) return result.next = l1;
//     console.log('hello',result);
//     if (l1.val <= l2.val) {
//       result.next = l1;
//       l1 = l1.next;
//     } else {
//       result.next = l2;
//       l2 = l2.next;
//     }
//     return recurse(l1, l2);
//   }
//   recurse(l1, l2);
//   return result;
// }
//
// console.log(mergeTwoLists(list1, list2));

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(value) {
    const newTail = new Node(value);
    if (!this.head) {
      this.head = newTail;
      this.tail = newTail;
    } else {
      this.tail.next = newTail;
      this.tail = newTail;
    }
    return newTail;
  }

  remove() {
    let head = this.head;
    if (!head) return 'List is empty';
    if (head.next === null) {
      this.head = null;
      this.tail = null;
      return head;
    }
    while (head.next.next !== null) {
      head = head.next;
    }
    let removedNode = head.next;
    head.next = null;
    this.tail = head;
    return removedNode;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
list.insert(50);

let list2 = new LinkedList();
list2.insert(5);
list2.insert(8);
list2.insert(15);
list2.insert(25);
list2.insert(40);
list2.insert(50);

function mergeTwoLists(l1, l2) {
  let count = 0;
  let result = new LinkedList();
  let values = [];

  while (l1.head && l2.head) {
    if (count > 50) break;
    count++;
    if (l1.head.value <= l2.head.value) {
      result.insert(l1.head.value);
      values.push(l1.head.value);
      l1.head = l1.head.next;
    } else if (l2.head.value < l1.head.value) {
      result.insert(l2.head.value);
      values.push(l2.head.value);
      l2.head = l2.head.next;
    }
  }
  if (l1.head) {
    while (l1.head) {
      result.insert(l1.head);
      values.push(l1.head.value);
      l1.head = l1.next;
    }
  }
  if (l2.head) {
    while (l2.head) {
      result.insert(l2.head);
      values.push(l2.head.value);
      l2.head = l2.next;
    }
  }
  console.log(values);
  return result;
}

console.log(mergeTwoLists(list, list2));
