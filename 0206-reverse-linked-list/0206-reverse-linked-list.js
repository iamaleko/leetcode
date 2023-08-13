const reverseList = (head) => {
  if (!head || !head.next) return head;
  let next = head.next;
  head.next = null;
  while (next) {
    [next.next, next, head] = [head, next.next, next];
  }
  return head;
};