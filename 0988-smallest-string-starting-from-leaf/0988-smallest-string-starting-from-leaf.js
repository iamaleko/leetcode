// faster because of using linked list
class ListNode {
  constructor(node, s = '', next = null) {
    this.node = node;
    this.s = s;
    this.next = next;
  }
}
const smallestFromLeaf = (root) => {
  let res = '',
      head = new ListNode(root),
      node,
      s,
      voc = 'abcdefghijklmnopqrstuvwxyz';
  while (head) {
    node = head.node;
    s = voc[node.val] + head.s;
    head = head.next;
    if (node.left || node.right) {
      if (node.left) head = new ListNode(node.left, s, head);
      if (node.right) head = new ListNode(node.right, s, head);
    } else if (!res || res > s) {
      res = s;
    }
  }
  return res;
};

// little bit slower than linked list as object but faster than array
// const smallestFromLeaf = (root) => {
//   let res = '',
//       head = [root, '', null],
//       node,
//       s;
//   while (head) {
//     [node, s, head] = head;
//     s = String.fromCharCode(97 + node.val) + s;
//     if (node.left || node.right) {
//       if (node.left) head = [node.left, s, head];
//       if (node.right) head = [node.right, s, head];
//     } else if (!res || res > s) {
//       res = s;
//     }
//   }
//   return res;
// };

// slower because of using array as queue
// const smallestFromLeaf = (root) => {
//   let res = '';
//   const queue = [[root, '']];
//   while (queue.length) {
//     let [node, s] = queue.pop();
//     s = String.fromCharCode(97 + node.val) + s;
//     if (node.left || node.right) {
//       if (node.left) queue.push([node.left, s]);
//       if (node.right) queue.push([node.right, s]);
//     } else if (!res || res > s) {
//       res = s;
//     }
//   }
//   return res;
// };