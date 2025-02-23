/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func constructFromPrePost(preorder []int, postorder []int) *TreeNode {
  nodes := map[int]*TreeNode{}
  // create nodes
  for _, node := range postorder {
    nodes[node] = &TreeNode{ Val: node }
  }
  // link nodes
  candidates := map[int]bool{}
  for _, node := range postorder {
    if len(candidates) != 0 {
      found := false
      for _, child := range preorder {
        if found {
          if candidates[child] {
            if nodes[node].Left == nil {
              nodes[node].Left = nodes[child]
            } else {
              nodes[node].Right = nodes[child]
            }
            delete(candidates, child)
          }
        } else if child == node {
          found = true
        }
      }
    }
    candidates[node] = true
  }

  return nodes[preorder[0]]
}