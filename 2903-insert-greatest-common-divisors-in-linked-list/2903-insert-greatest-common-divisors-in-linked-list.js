const gcd = (a, b) => {
  while (a && b) a > b ? a %= b : b %= a;
  return a + b;
}

const insertGreatestCommonDivisors = (head) => {
  let curr = head;
  while(curr.next) {
    const node = new curr.constructor(gcd(curr.val, curr.next.val));
    node.next = curr.next;
    curr.next = node;
    curr = node.next;
  }
  return head;
};