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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  head = new ListNode(0, head);
  let node = head, prev = head;
  while (node.next) {
    if (n-- <= 0) prev = prev.next;
    node = node.next;
  }
  prev.next = prev.next?.next;
  return head.next;
};