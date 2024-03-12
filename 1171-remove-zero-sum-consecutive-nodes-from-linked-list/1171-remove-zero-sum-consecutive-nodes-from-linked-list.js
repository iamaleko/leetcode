const removeZeroSumSublists = (head) => {
  // running sum
  let node = head, map = {}, sum = 0;
  while (node) {
    sum += node.val;
    map[sum] = node;
    node = node.next;
  }

  // rechain
  node = head;
  sum = 0;
  while (node) {
    sum += node.val;
    if (sum === 0) {
      head = node.next;
    } else if (sum in map) {
      node.next = map[sum].next;
    }
    node = node.next;
  }

  return head;
};