/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  let a = head, b = head;

  // find center
  while (b) {
    b = b.next?.next;
    a = a.next;
  }

  // reverse second part
  b = null;
  while (a) {
    [a.next, b, a] = [b, a, a.next];
  }

  // from edges to center
  a = head;
  while (b) {
    if (a.val !== b.val) return false;
    a = a.next;
    b = b.next;
  }

  return true;
};