/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func findTilt(root *TreeNode) int {
  var traverse func(node *TreeNode) (int, int)
  traverse = func(node *TreeNode) (int, int) {
    if node == nil {
      return 0, 0
    }
    changedSum, nodeLeftValSum, nodeRightValSum := 0, 0, 0
    if node.Left != nil {
      var nodeLeftChangedSum int
      nodeLeftChangedSum, nodeLeftValSum = traverse(node.Left)
      changedSum += nodeLeftChangedSum
    }
    if node.Right != nil {
      var nodeRightChangedSum int
      nodeRightChangedSum, nodeRightValSum = traverse(node.Right)
      changedSum += nodeRightChangedSum
    }
    changedSum += int(math.Abs(float64(nodeLeftValSum) - float64(nodeRightValSum)))
    return changedSum, nodeLeftValSum + node.Val + nodeRightValSum
  }
  ans, _ := traverse(root)
  return ans
}