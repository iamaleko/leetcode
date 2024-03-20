const mergeInBetween = (list1, a, b, list2) => {
  // find list2 edges
  let headB = list2, tailB = list2;
  while (tailB.next) tailB = tailB.next; 

  // merge lists
  let node = list1, i = 0;
  a--;
  while (node) {
    if (i === a) {
      let tmp = node.next;
      node.next = headB;
      node = tmp;
    } else if (i === b) {
      tailB.next = node;
      break;
    }
    node = node.next;
    i++;
  }
  return list1;
};