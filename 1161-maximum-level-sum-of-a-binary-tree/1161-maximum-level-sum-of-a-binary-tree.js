const maxLevelSum = (root) => {
  const levels = [];
  const traverse = (node, level) => {
    levels[level] === undefined ? levels[level] = node.val : levels[level] += node.val;
    if (node.left) traverse(node.left, level + 1);
    if (node.right) traverse(node.right, level + 1);
  }
  traverse(root, 0);
  let max = -Infinity, index = -1;
  for (let i = 0; i < levels.length; i++) if (max < levels[i]) {
    max = levels[i];
    index = i;
  }
  return ++index;
};