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
  let node = head;
  while (node) {
    if (!node.next) break;

    let [a, b] = [node.val, node.next.val];
    if (a !== b) while (a && b) [a, b] = [a % b, b % a];

    node.next = new ListNode(a || b, node.next);
    node = node.next.next;
  }
  return head;
};