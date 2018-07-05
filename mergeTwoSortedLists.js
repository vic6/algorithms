// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
//
// Example:
//
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2) {
  let result = new ListNode(0);
  let head;
  while (l1 && l2) {
    // console.log(l1);
    if (l1.val <= l2.val) {
      result.next = l1;
      l1 = l1.next;
      result = result.next;
    } else {
      result.next = l2;
      l2 = l2.next;
      result = result.next;
    }
    if (!head) head = result;
    console.log(result);
  }

  if (!l1 === null) {
    result.next = l1;
  } else {
    result.next = l2;
  }
  return head;
};

let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

console.log(mergeTwoLists(list1, list2));
