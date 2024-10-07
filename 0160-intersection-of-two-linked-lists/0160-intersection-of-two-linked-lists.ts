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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const s = new Set<ListNode>();
  let node = headA;
  while (node) {
    s.add(node)
    node = node.next;
  }
  node = headB;
  while (node) {
    if (s.has(node)) return node;
    node = node.next;
  }
  return null;
};