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

function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
  let ln = 0, node = head, current_ln = 0;
  while (node) { ln++; node = node.next; } 
  let part = Math.floor(ln / k), add = ln - part * k;
  const ans: Array<ListNode | null> = new Array(k).fill(null);
  node = head;
  for (let i = 0; i < k; i++) {
    let left = part, tail = null;
    if (i < add) left++;
    if (!left) break;
    while (node && left) {
      if (tail) { tail.next = node; } else { ans[i] = node; }
      tail = node;
      node = node.next;
      if (--left === 0) tail.next = null;
    }
  }
  return ans;
};