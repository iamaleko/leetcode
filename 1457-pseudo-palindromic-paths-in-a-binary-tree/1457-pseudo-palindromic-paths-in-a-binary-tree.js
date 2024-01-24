const pseudoPalindromicPaths  = (root) => {
  let res = 0, node, i, n;
  root.mask = 0;
  const queue = [root];
  while (queue.length) {
    node = queue.pop();
    node.mask ^= 1 << node.val;
    if (node.left && node.right) {
      node.left.mask = node.right.mask = node.mask;
      queue.push(node.left);
      queue.push(node.right);
    } else if (node.left) {
      node.left.mask = node.mask;
      queue.push(node.left);
    } else if (node.right) {
      node.right.mask = node.mask;
      queue.push(node.right);
    } else if (node.mask === 0) {
      ++res;
    } else {
      n = 0;
      while (node.mask) {
        if (node.mask & 1) ++n;
        node.mask = node.mask >> 1;
      }
      if (n === 1) ++res;
    }
    delete node.mask;
  }
  return res;
};