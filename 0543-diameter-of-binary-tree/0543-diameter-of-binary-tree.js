const diameterOfBinaryTree = (root) => {
  let max = 0;
  const down = [root], up = [];
  while (down.length) {
    const node = down.pop();
    if (node.left) down.push(node.left);
    if (node.right) down.push(node.right);
    up.push(node);
  }
  while (up.length) {
    const node = up.pop();
    const l = node.left ? (node.left.path || 0) + 1 : 0;
    const r = node.right ? (node.right.path || 0) + 1 : 0;
    if (max < l + r) max = l + r;
    node.path = l > r ? l : r;
  }
  return max;
};