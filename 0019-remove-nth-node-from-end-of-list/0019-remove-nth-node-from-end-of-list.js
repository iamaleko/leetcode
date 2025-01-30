const removeNthFromEnd = (head, n) => {
  head = new ListNode(0, head);
  let node = head, prev = head;
  while (node.next) {
    n ? n-- : prev = prev.next;
    node = node.next;
  }
  prev.next = prev.next.next;
  return head.next;
};