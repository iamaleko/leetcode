const postorderTraversal = (root: TreeNode | null): number[] => {
  const values: number[] = [];
  const traverse = (node: TreeNode): void => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    values.push(node.val);
  };
  if (root !== null) traverse(root);
  return values;
};