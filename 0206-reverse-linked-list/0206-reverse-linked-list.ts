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

function reverseList(head: ListNode | null): ListNode | null {
  let node = head, prev: ListNode | null = null;
  while (node) {
    let next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
};