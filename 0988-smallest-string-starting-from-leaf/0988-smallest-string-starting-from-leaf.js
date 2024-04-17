// class ListNode {
//   constructor(node, s = '', next = null) {
//     this.node = node;
//     this.s = s;
//     this.next = next;
//   }
// }

// const smallestFromLeaf = (root) => {
//   let res = '',
//       head = new ListNode(root);
//   while (head) {
//     const node = head.node,
//           s = String.fromCharCode(97 + node.val) + head.s;
//     head = head.next;
//     if (node.left || node.right) {
//       if (node.left) head = new ListNode(node.left, s, head);
//       if (node.right) head = new ListNode(node.right, s, head);
//     } else if (!res || res > s) {
//       res = s;
//     }
//   }
//   return res;
// };

const smallestFromLeaf = (root) => {
  let res = '';
  const queue = [[root, '']];
  while (queue.length) {
    let [node, s] = queue.pop();
    s = String.fromCharCode(97 + node.val) + s;
    if (node.left || node.right) {
      if (node.left) queue.push([node.left, s]);
      if (node.right) queue.push([node.right, s]);
    } else if (!res || res > s) {
      res = s;
    }
  }
  return res;
};