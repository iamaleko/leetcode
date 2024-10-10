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

function mergeTwoLists(a: ListNode | null, b: ListNode | null): ListNode | null {
  if (!b) return a;
  if (!a) return b;
  const head = new ListNode(0);
  let node = head;
  while (a && b) {
    if (a.val < b.val) {
      node.next = a;
      a = a.next;
    } else {
      node.next = b;
      b = b.next;
    }
    node = node.next;
  }
  if (a) node.next = a;
  if (b) node.next = b;
  return head.next;
};