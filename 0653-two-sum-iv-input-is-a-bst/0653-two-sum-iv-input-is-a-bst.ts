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

function findTarget(root: TreeNode | null, k: number): boolean {
  const set = new Set<number>();
  const traverse = (node: TreeNode): boolean => {
    if (set.has(k - node.val)) return true;
    set.add(node.val);
    return !!node.left && traverse(node.left) || !!node.right && traverse(node.right);
  }
  return root && traverse(root);
};