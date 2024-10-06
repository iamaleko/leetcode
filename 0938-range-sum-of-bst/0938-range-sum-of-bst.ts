/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let ans = 0;
  const traverse = (node: TreeNode): void => {
    if (node.val >= low && node.val <= high) ans += node.val;
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  if (root) traverse(root);
  return ans;
};