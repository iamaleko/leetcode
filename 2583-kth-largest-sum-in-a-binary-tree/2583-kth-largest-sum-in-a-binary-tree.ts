function kthLargestLevelSum(root: TreeNode | null, k: number): number {
  const levels: number[] = [];
  const traverse = (node: TreeNode, level: number): void => {
    levels[level] = (levels[level] ?? 0) + node.val;
    level++;
    if (node.left) traverse(node.left, level);
    if (node.right) traverse(node.right, level);
  }
  if (root) traverse(root, 0);
  if (k > levels.length) return - 1;
  levels.sort((a, b) => b - a);
  return levels[k - 1];
};