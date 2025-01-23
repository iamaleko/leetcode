function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1?.val && !l1?.next) return l2;
    if (!l2?.val && !l2?.next) return l1;

    let head = new ListNode(),
        tail = head,
        mem = 0;

    while (l1 || l2 || mem) {
      let sum = mem
      if (l1) {
        sum += l1.val
        l1 = l1.next
      }
      if (l2) {
        sum += l2.val
        l2 = l2.next
      }
      mem = Math.floor(sum / 10)
      tail.next = new ListNode(sum % 10)
      tail = tail.next
    }

    return head.next
};