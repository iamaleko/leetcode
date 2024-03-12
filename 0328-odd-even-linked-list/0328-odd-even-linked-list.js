const oddEvenList = (node) => {
  if (!node || !node.next) return node;
  let even = null, odd = null, oddHead = null, evenHead = null, isEven = false;
  while(node) {
    if (isEven) {
      if (even) { even.next = node; } else { evenHead = node; }
      even = node;
    } else {
      if (odd) { odd.next = node; } else { oddHead = node; }
      odd = node;
    }
    isEven = !isEven;
    node = node.next;
  }
  even.next = null;
  odd.next = evenHead;
  return oddHead;
};