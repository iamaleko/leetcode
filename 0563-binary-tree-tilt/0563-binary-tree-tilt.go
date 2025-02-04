/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func findTilt(root *TreeNode) int {
  var traverse func(node *TreeNode) (float64, float64)
  traverse = func(node *TreeNode) (float64, float64) {
    if node == nil {
      return 0, 0
    }
    var changedSum, leftValSum, rightValSum float64
    if node.Left != nil {
      var leftChangedSum float64
      leftChangedSum, leftValSum = traverse(node.Left)
      changedSum += leftChangedSum
    }
    if node.Right != nil {
      var rightChangedSum float64
      rightChangedSum, rightValSum = traverse(node.Right)
      changedSum += rightChangedSum
    }
    changedSum += math.Abs(leftValSum - rightValSum)
    return changedSum, leftValSum + float64(node.Val) + rightValSum
  }
  ans, _ := traverse(root)
  return int(ans)
}