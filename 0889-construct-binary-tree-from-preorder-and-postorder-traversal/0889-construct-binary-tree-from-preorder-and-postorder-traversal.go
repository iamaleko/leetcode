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
	start, n := map[int]int{}, len(preorder)
	// create nodes
	for i, node := range preorder {
		nodes[node] = &TreeNode{Val: node}
		start[node] = i + 1
	}
	// link nodes
	candidates := map[int]bool{}
	for _, node := range postorder {
		if len(candidates) != 0 {
      for i := start[node]; i < n; i++ {
        child := preorder[i]
        if candidates[child] {
          if nodes[node].Left == nil {
            nodes[node].Left = nodes[child]
          } else {
            nodes[node].Right = nodes[child]
          }
          delete(candidates, child)
        }
			}
		}
		candidates[node] = true
	}
  // return root
	return nodes[preorder[0]]
}