/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let num = 0;
  while (head) {
    num |= head.val * 1;
    num = num << 1;
    head = head.next;
  }
  return num>>1;
};