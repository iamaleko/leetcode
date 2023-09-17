const mergeNodes = (head) => {
  let first;
  let last;
  while (head.next) {
    if (head.val === 0) {
      const node = new head.constructor();
      node.val = 0;
      if (last) last.next = node;
      if (!first) first = node;
      last = node;
    } else {
      last.val += head.val;
    }
    head = head.next;
  }
  return first;
};