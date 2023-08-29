const mergeKLists = (lists) => {
  if (!lists.length) return null;

  // sort
  lists.sort((a, b) => a && b ? a.val - b.val : a ? 1 : -1);

  const head = new ListNode();
  let tail = head;

  const append = (node) => {
    tail.next = node;
    tail = node;
    const next = tail.next;
    tail.next = null;
    return next;
  }

  const sort = (pointer) => {
    const list = lists.splice(pointer, 1)[0];
    let a = 0, b = lists.length - 1, c;
    while (a <= b) {
      c = ((a + b) / 2) | 0;
      lists[c] === null || lists[c].val <= list.val ? a = ++c : b = --c;
    }
    lists.splice(a, 0, list);
  }

  // build
  let pointer = 0;
  while (pointer < lists.length) {
    if (!lists[pointer]) {
      ++pointer;
      continue;
    }

    lists[pointer] = append(lists[pointer]);

    if (
      lists[pointer] &&
      lists[pointer + 1] &&
      lists[pointer].val > lists[pointer + 1].val
    ) {
      // resort
      sort(pointer);
    }
  }

  return head.next;
};