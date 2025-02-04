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
  q := []*TreeNode{root}
  for len(q) > 0 {
    if check(q[0], subRoot) {
      return true
    }
    if q[0].Left != nil {
      q = append(q, q[0].Left)
    }
    if q[0].Right != nil {
      q = append(q, q[0].Right)
    }
    q = q[1:]
  }
  return false
}