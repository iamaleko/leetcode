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

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  const gcd = (a: number, b :number):number => {
    while (a > 0 && b > 0) [a, b] = [Math.min(a, b), Math.max(a, b) % Math.min(a, b)];
    return Math.max(a, b);
  }
  let node = head;
  while (node) {
    if (!node.next) break;
    node.next = new ListNode(gcd(node.val, node.next.val), node.next);
    node = node.next.next;
  }
  return head;
};