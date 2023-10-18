/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
  if (k === 0 || !head) return head;
  let len = 1;
  let node = head;
  while (node.next) {
    ++len;
    node = node.next;
  }
  if (k === len || len === 1) return head;
  node.next = head;
  k = len - k % len;
  node = head;
  while (--k > 0) node = node.next;
  head = node.next;
  node.next = null;
  return head;
};