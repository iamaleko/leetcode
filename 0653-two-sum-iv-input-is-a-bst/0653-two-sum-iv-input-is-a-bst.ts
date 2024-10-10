// O(n) PASS
function findTarget(root: TreeNode | null, k: number): boolean {
  const set = new Set<number>();
  const traverse = (node: TreeNode): boolean => {
    if (set.has(k - node.val)) return true;
    set.add(node.val);
    return node.left !== null && traverse(node.left) ||
           node.right !== null && Math.abs(node.val - k) > 0 && traverse(node.right);
  }
  return root && traverse(root);
};