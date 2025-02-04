/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

func preorder(root *Node) []int {
  ans := []int{}
  if root != nil {
    var traverse func(node *Node)
    traverse = func(node *Node) {
      ans = append(ans, node.Val)
      for _, child := range node.Children {
        traverse(child)
      }
    }
    traverse(root)
  }
  return ans
}