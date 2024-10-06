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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let ans = 0;
  const traverse = (node: TreeNode, depth: number): number => {
    const l = node.left ? traverse(node.left, 1) : 0,
          r = node.right ? traverse(node.right, 1) : 0;
    if (l + r > ans) ans = l + r;
    return depth + Math.max(l, r);
  }
  if (root) traverse(root, 0);
  return ans;
};