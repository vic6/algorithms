/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var reverseList = function(head) {
  let result;
  if (!(head instanceof ListNode)) return head;
  while (head) {
    const node = new ListNode(head.val);
    if (result === undefined) {;
      result = node;
    } else {
      node.next = result;
      result = node;
    }
    head = head.next;
  }
  return result;
};

var insert = function(val, head) {
  const node = new ListNode(val);
  if (!head) {
    head = node;
    return head;
  }
  while (head.next) {
    head = head.next;
  }
  head.next = node;
  return head;
};

let node = new ListNode(0);
node.next = new ListNode(1);
node.next.next = new ListNode(4);
node.next.next.next = new ListNode(-2);


console.log(reverseList(node));
