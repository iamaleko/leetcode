const goodNodes = (root) => {
  let res = 0;
  const traverse = (node, max) => {
    if (max <= node.val) {
      ++res;
      max = node.val;
    }
    if (node.left) traverse(node.left, max);
    if (node.right) traverse(node.right, max);
  }
  traverse(root, root.val);
  return res;
};