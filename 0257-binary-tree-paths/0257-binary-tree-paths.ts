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

function binaryTreePaths(root: TreeNode | null): string[] {
  const ans: string[] = [];
  const traverse = (node: TreeNode, path: string = ''): void => {
    path += `->${node.val}`;
    if (node.left) traverse(node.left, path);
    if (node.right) traverse(node.right, path);
    if (!node.left && !node.right) ans.push(path.slice(2));
  }
  if (root) traverse(root);
  return ans;
};