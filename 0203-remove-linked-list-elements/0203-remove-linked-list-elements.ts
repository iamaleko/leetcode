/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
  head = new ListNode(-1, head);
  let prev = head, node = head.next;
  while (node) {
    if (node.val === val) {
      prev.next = node.next;
    } else {
      prev = node;
    }
    node = node.next;
  }
  return head.next;
};