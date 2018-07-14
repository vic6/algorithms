/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = head;
  let count = 0;

  while (current) {
    if (current.val) count++;
    current = current.next;
  }

  count -= n;
  current = dummy;
  while (count > 0) {
    count--;
    current = current.next;
  }
  current.next = current.next.next;
  return dummy.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.insert = function(val) {
  const node = new ListNode(val);
  if (!this.head) {
    this.head = node;
    this.tail = this.head;
  } else {
    const oldTail = this.tail;
    oldTail.next = node;
    this.tail = node;
  }
  return this.head;
};

LinkedList.prototype.values = function() {
  let result = [];
  let stop = 0;
  let current = this.head;
  while (current) {
    if (stop > 50) break;
    result.push(current.val);
    current = current.next;
    stop++;
  }
  return result;
};

let list = new LinkedList();
list.insert(1);
// list.insert(2);
// list.insert(3);
// list.insert(4);
let test = list.insert(5);

removeNthFromEnd(test, 2);
console.log(test);
// console.log(list.values());
