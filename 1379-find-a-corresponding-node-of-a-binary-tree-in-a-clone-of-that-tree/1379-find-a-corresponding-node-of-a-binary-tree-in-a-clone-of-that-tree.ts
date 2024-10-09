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

function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {
  let ans: TreeNode | null = null;
  const traverse = (a: TreeNode, b: TreeNode): void => {
    if (a === target) {
      ans = b;
    } else {
      if (a.left) traverse(a.left, b.left);
      if (a.right) traverse(a.right, b.right);
    }
  }
  traverse(original, cloned);
  return ans;
};