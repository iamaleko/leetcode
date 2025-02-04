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

function findTilt(root: TreeNode | null): number {
  const traverse = (node: TreeNode | null) => {
    if (node === null) return [0, 0];
    const [leftTiltSum, leftValSum] = traverse(node.left);
    const [rightTiltSum, rightValSum] = traverse(node.right);
    return [
      Math.abs(leftValSum - rightValSum) + leftTiltSum + rightTiltSum,
      leftValSum + node.val + rightValSum,
    ];
  }
  return traverse(root)[0];
};