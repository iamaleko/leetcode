const reorderList = (head) => {
  // split
  let a = head, l = a, r = a, b;
  while (true) {
    r = r.next?.next;
    if (!r) {
      b = l.next;
      l.next = null;
      break;
    } else {
      l = l.next;
    }
  }
  
  if (b) {
    // reverse
    let prev = null;
    while (b) [b.next, prev, b] = [prev, b, b.next];
    b = prev;

    // merge
    while (a && b) [b.next, a.next, b, a] = [a.next, b, b.next, a.next];
  }

  return head;
};