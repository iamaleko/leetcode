const pairSum = (head) => {
  let l = head, r = head, max = -Infinity, tmp, prev = null;
  while (r) {
    if (r = r.next?.next) {
      l = l.next;
    } else {
      tmp = l.next;
      l.next = null;
      l = tmp;
    }
  }
  while (l) {
    let tmp = l.next;
    l.next = prev;
    prev = l;
    l = tmp;
  }
  
  r = prev;
  l = head;
  while(r) {
    if (max < l.val + r.val) max = l.val + r.val;
    l = l.next;
    r = r.next;
  }

  return max;
};