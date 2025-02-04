/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSubtree(root *TreeNode, subRoot *TreeNode) bool {
  var check func(a *TreeNode, b *TreeNode) bool
  check = func(a *TreeNode, b *TreeNode) bool {
    if a == nil || b == nil {
      return a == b
    }
    return a.Val == b.Val && check(a.Left, b.Left) && check(a.Right, b.Right)
  }
  var traverse func(a *TreeNode) bool
  traverse = func(a *TreeNode) bool {
    if a == nil || subRoot == nil {
      return a == subRoot
    }
    return check(a, subRoot) || traverse(a.Left) || traverse(a.Right)
  }
  return traverse(root)
}