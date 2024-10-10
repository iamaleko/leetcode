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

function isPalindrome(head: ListNode | null): boolean {
  if (!head) return false;
  let a = head, b = head, c = head, prev = null;
  while (b) {
    b = b.next;
    if (b) {
      b = b.next;
      a = a.next
      const next = c.next;
      c.next = prev;
      prev = c;
      c = next;
    } else {
      a = a.next;
    }
  }
  b = prev;
  while (a || b) {
    if (!a && b || a && !b || a.val !== b.val) return false;
    a = a.next;
    b = b.next;
  }
  return true;
};