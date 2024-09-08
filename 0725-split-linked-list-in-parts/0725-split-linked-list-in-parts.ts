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
  let ln = 0,
      node = head;
  while (node) { ln++; node = node.next; } 
  const ans: Array<ListNode | null> = new Array(k).fill(null),
        part = Math.floor(ln / k),
        add = ln - part * k;
  node = head;
  for (let i = 0, left: number, tail: ListNode | null; i < k; i++) {
    left = part;
    tail = null;
    if (i < add) left++;
    if (!left) break;
    while (node && left) {
      if (tail) { tail = tail.next = node; } else { tail = ans[i] = node; }
      node = node.next;
      if (--left === 0) tail.next = null;
    }
  }
  return ans;
};