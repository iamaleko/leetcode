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

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
  const toRemove = new Set(nums);
  head = new ListNode(0, head);
  let node = head;
  while (node.next) {
    if (toRemove.has(node.next.val)) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return head.next;
};