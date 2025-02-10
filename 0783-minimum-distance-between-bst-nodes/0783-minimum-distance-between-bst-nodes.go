/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
import "math"
func minDiffInBST(root *TreeNode) int {
  var traverse func(node *TreeNode) (minVal int, maxVal int, minDiff int)
  traverse = func(node *TreeNode) (minVal int, maxVal int, minDiff int) {
    minVal, maxVal, minDiff = node.Val, node.Val, math.MaxInt
    if node.Left != nil {
      leftMinVal, leftMaxVal, leftMinDiff := traverse(node.Left)
      minDiff = min(minDiff, leftMinDiff, node.Val - leftMaxVal)
      minVal = min(minVal, leftMinVal)
      maxVal = max(maxVal, leftMaxVal)
    }
    if node.Right != nil {
      rightMinVal, rightMaxVal, rightMinDiff := traverse(node.Right)
      minDiff = min(minDiff, rightMinDiff, rightMinVal - node.Val)
      minVal = min(minVal, rightMinVal)
      maxVal = max(maxVal, rightMaxVal)
    }
    return
  }
  _, _, ans := traverse(root)
  return ans
}