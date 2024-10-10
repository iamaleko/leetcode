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

function averageOfLevels(root: TreeNode | null): number[] {
  const levels: number[] = [];
  const nodes: number[] = [];
  const traverse = (node: TreeNode, level: number): void => {
    levels[level] = (levels[level] || 0) + node.val;
    nodes[level] = (nodes[level] || 0) + 1;
    level++;
    if (node.left) traverse(node.left, level);
    if (node.right) traverse(node.right, level);
  }
  traverse(root, 0);
  return levels.map((v, i) => v / nodes[i]);
};