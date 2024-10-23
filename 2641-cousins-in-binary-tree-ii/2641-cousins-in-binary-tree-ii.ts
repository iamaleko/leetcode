function replaceValueInTree(root: TreeNode | null): TreeNode | null {
  if (root) {
    const levels: number[] = [];
    (function self(node: TreeNode, level: number) {
      levels[level] = (levels[level] ?? 0) + node.val;
      node.val = 0;
      if (node.left) {
        node.val += node.left.val;
        self(node.left, level + 1);
      }
      if (node.right) {
        node.val += node.right.val;
        self(node.right, level + 1);
      }
    })(root, 0);
    (function self(node: TreeNode, level: number, parent?: TreeNode) {
      if (node.left) self(node.left, level + 1, node);
      if (node.right) self(node.right, level + 1, node);
      node.val = parent ? levels[level] - parent.val : 0;
    })(root, 0);
  }
  return root;
};