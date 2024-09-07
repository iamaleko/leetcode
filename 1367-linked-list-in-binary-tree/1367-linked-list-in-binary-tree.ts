/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

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

function isSubPath(head: ListNode, root: TreeNode): boolean {
  const check = (t_node: TreeNode, l_node: ListNode): boolean => {
    if (t_node.val !== l_node.val) return false;
    return l_node.next === null ||
           t_node.left !== null && check(t_node.left, l_node.next) ||
           t_node.right !== null && check(t_node.right, l_node.next);
  }
  const dfs = (t_node: TreeNode): boolean => {
    return check(t_node, head) ||
           t_node.left !== null && dfs(t_node.left) ||
           t_node.right !== null && dfs(t_node.right);
  }
  return dfs(root);
};