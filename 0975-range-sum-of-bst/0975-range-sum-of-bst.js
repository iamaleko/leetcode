/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const rangeSumBST = (root, low, high) => {
  if (!root) return 0;
  const traverse = (node) => {
    return (node.val <= high && node.val >= low ? node.val : 0) +
      (node.right && node.val < high ? traverse(node.right) : 0) +
      (node.left && node.val > low ? traverse(node.left) : 0);
  }
  return traverse(root);
};