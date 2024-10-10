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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) return null;
  const build = (l: number, r: number): TreeNode => {
    if (l > r) return null;
    const c = l + r >>> 1;
    return new TreeNode(nums[c], build(l, c - 1), build(c + 1, r));
  }
  return build(0, nums.length - 1);
};