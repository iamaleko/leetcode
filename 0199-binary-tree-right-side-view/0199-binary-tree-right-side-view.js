const rightSideView = (root) => {
  const res = [];
  const traverse = (node, level) => {
    res[level] = node.val;
    if (node.left) traverse(node.left, level + 1);
    if (node.right) traverse(node.right, level + 1);
  }
  root && traverse(root, 0);
  return res;
};