const removeZeroSumSublists = (head) => {
  // running sum
  let node = head, map = {};
  head.sum = head.val;
  while (node.next) {
    node.next.sum = node.next.val + node.sum;
    node = node.next;
    map[node.sum] = node;
  }

  // rechain
  node = head;
  while (node) {
    if (node.sum === 0) {
      head = node.next;
    } else if (node.sum in map && map[node.sum] !== node) {
      node.next = map[node.sum].next;
    }
    node = node.next;
  }

  return head;
};