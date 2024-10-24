function flipEquiv(a: TreeNode | null, b: TreeNode | null): boolean {
  const traverse = (a: TreeNode | null, b: TreeNode | null) => {
    if (!a && !b) return true;
    if (a && b && a.val === b.val) {
      if (a.left?.val === b.left?.val) { // not flipped
        return traverse(a.left, b.left) && traverse(a.right, b.right);
      } else if (a.left?.val === b.right?.val) { // flipped
        return traverse(a.left, b.right) && traverse(a.right, b.left);
      }
    }
    return false;
  }
  return traverse(a, b);
};