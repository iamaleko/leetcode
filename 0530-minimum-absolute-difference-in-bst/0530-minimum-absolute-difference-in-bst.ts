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

function getMinimumDifference(root: TreeNode): number {
  return Math.min(
    root.left ? root.val - root.left.val : Infinity,
    root.right ? root.right.val - root.val : Infinity,
    root.left ? getMinimumDifference(root.left) : Infinity,
    root.right ? getMinimumDifference(root.right) : Infinity
  );
};