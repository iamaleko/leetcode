/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = (head) => {
  if (!head || !head.next) return head;
  let prevprev, prev = head, node = head.next;
  head = head.next;
  while (node) {
    // fix prevprev
    if (prevprev) prevprev.next = node;
    prevprev = prev;
    // fix prev
    prev.next = node?.next;
    prev = prev.next;
    // fix node
    node.next = prevprev;
    node = prevprev?.next?.next;
  }
  return head;
};