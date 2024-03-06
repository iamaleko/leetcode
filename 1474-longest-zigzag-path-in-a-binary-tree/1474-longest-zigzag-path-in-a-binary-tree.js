const longestZigZag = (root) => {
  let max = 0;
  const traverse = (node, depth, left) => {
    if (depth > max) max = depth;
    if (node.left) traverse(node.left, left ? depth + 1 : 1, false);
    if (node.right) traverse(node.right, left ? 1 : depth + 1, true);
  }
  if (root.left) traverse(root.left, 1, false);
  if (root.right) traverse(root.right, 1, true);
  return max;
};