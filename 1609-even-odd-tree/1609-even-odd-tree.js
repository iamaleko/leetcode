const isEvenOddTree = (root) => {
  const levels = [];
  const dfs = (node, level) => {
    if (
      node.val % 2 === level % 2 ||
      levels[level] !== undefined &&
      (level % 2 === 0 ? levels[level] >= node.val : levels[level] <= node.val)
    ) return false;
    levels[level++] = node.val;
    return (!node.left || dfs(node.left, level)) && (!node.right || dfs(node.right, level));
  }
  return dfs(root, 0);
};