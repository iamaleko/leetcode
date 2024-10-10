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

function isSymmetric(root: TreeNode | null): boolean {
  const traverse = (left: TreeNode, right: TreeNode) => {
    if (left && right && left.val === right.val) {
      return traverse(left.left, right.right) && traverse(left.right, right.left);
    }
    return left === right;
  }
  return root ? traverse(root.left, root.right) : true;
};