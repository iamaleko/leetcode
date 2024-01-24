const pseudoPalindromicPaths  = (root) => {
  let res = 0, node, i, n;
  root.val = 1 << root.val;
  const queue = [root];
  while (queue.length) {
    node = queue.pop();
    if (node.left) {
      node.left.val = node.val ^ 1 << node.left.val;
      queue.push(node.left);
    }
    if (node.right) {
      node.right.val = node.val ^ 1 << node.right.val;
      queue.push(node.right);
    }
    if (!node.left && !node.right) {
      if (node.val === 0) {
        ++res;
      } else {
        n = 0;
        while (node.val) {
          if (node.val & 1) ++n;
          node.val = node.val >> 1;
        }
        if (n === 1) ++res;
      }
    }
  }
  return res;
};