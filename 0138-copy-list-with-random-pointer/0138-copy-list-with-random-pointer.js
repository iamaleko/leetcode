const copyRandomList = (ahead) => {
  if (!ahead) return null;
  const bhead = new Node(ahead.val, ahead.next, null);
  ahead.copy = bhead;
  let anode = ahead.next, bnode = bhead;
  while (anode) {
    bnode.next = new Node(anode.val, anode.next, null);
    anode.copy = bnode.next;
    anode = anode.next;
    bnode = bnode.next;
  }
  anode = ahead;
  bnode = bhead;
  while (anode) {
    bnode.random = anode.random ? anode.random.copy : null;
    anode = anode.next;
    bnode = bnode.next;
  }
  return bhead;
};