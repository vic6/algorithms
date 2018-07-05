// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var count = 0;

function ListNode(val) {
  this.val = val;
  this.next = null;
}


var addTwoNumbers = function(l1, l2) {
  let val1 = '';
  let val2 = '';
  while (l1) {
    count ++;
    if(count > 20) break;
    val1 = l1.val + val1;
    l1 = l1.next;
  }
  while (l2) {
    val2 = l2.val + val2;
    l2 = l2.next;
  }
  let sum = (parseInt(val1) + parseInt(val2)).toString();
  console.log(sum);
  let head = new ListNode(parseInt(sum[sum.length - 1]));
  let result = head;
  for (let i = sum.length - 2; i >= 0; i--) {
    let node = new ListNode(parseInt(sum[i]));
    result.next = node;
    result = result.next;
  }
  return head;
};

function createList(arr) {
  let head;
  let result = head;
  for (let i = sum.length - 2; i >= 0; i--) {
    let node = new ListNode(parseInt(sum[i]));
    result.next = node;
    result = result.next;
  }

}

const list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);

const list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(8);


console.log(addTwoNumbers(list1, list2));
