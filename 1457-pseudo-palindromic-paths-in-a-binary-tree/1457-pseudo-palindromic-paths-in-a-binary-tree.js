const pseudoPalindromicPaths  = (root) => {
  let res = 0, node, i, n;
  root.mem = 0;
  const queue = [root];
  while (queue.length) {
    node = queue.pop();
    node.mem ^= 1 << node.val;
    if (node.left && node.right) {
      node.left.mem = node.right.mem = node.mem;
      queue.push(node.left);
      queue.push(node.right);
    } else if (node.left) {
      node.left.mem = node.mem;
      queue.push(node.left);
    } else if (node.right) {
      node.right.mem = node.mem;
      queue.push(node.right);
    } else if (node.mem === 0) {
      ++res;
    } else {
      n = 0;
      while (node.mem) {
        if (node.mem & 1) ++n;
        node.mem = node.mem >> 1;
      }
      if (n === 1) ++res;
    }
    delete node.mem;
  }
  return res;
};