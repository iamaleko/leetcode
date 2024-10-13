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

function rightSideView(root: TreeNode | null): number[] {
  const levels: number[] = [];
  const traverse = (node: TreeNode, level: number): void => {
    if (levels[level] === undefined) levels[level] = node.val;
    if (node.right) traverse(node.right, level + 1);
    if (node.left) traverse(node.left, level + 1);
  }
  if (root) traverse(root, 0);
  return levels;
};