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
    leftTiltSum, leftValSum := traverse(node.Left)
    rightTiltSum, rightValSum := traverse(node.Right)
    tiltSum := math.Abs(leftValSum - rightValSum) + leftTiltSum + rightTiltSum
    valSum := leftValSum + float64(node.Val) + rightValSum
    return tiltSum, valSum
  }
  ans, _ := traverse(root)
  return int(ans)
}