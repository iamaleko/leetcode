const hasCycle = (slow, fast = slow?.next) => {
  while (fast) {
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast.next?.next;
  }
  return false;
};