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
    if (a == nil) != (b == nil) {
      return false
    }
    return a == nil || a.Val == b.Val && check(a.Left, b.Left) && check(a.Right, b.Right)
  }
  var traverse func(a *TreeNode) bool
  traverse = func(a *TreeNode) bool {
    return check(a, subRoot) || a != nil && (traverse(a.Left) || traverse(a.Right))
  }
  return traverse(root)
}