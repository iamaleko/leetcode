const partition = (head, x) => {
  let a = { next: null }, ah = a;
  let b = { next: null }, bh = b;
  while (head) {
    if (head.val < x) {
      a.next = head;
      a = a.next;
    } else {
      b.next = head;
      b = b.next;
    }
    head = head.next;
  }
  a.next = bh.next;
  b.next = null;
  return ah.next;
};