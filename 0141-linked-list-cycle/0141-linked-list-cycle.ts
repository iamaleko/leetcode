function hasCycle(head: ListNode | null): boolean {
  let a = head, b = head?.next;
  while (a && b) {
    if (a === b) return true;
    a = a.next;
    b = b.next?.next;
  }
  return false;
};