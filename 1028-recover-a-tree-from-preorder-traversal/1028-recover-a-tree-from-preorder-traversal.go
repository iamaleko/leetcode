/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func recoverFromPreorder(traversal string) *TreeNode {
	var depth, value int
	var depths, values []int
	traversal += "-"
	for i, rn := range traversal {
		if rn == '-' {
			if traversal[i-1] != '-' {
				depths, values = append(depths, depth), append(values, value)
				depth, value = 0, 0
			}
			depth++
		} else {
			value = value*10 + int(rn-'0')
		}
	}
	p, m := 0, len(values) - 1
	var traverse func() *TreeNode
	traverse = func() *TreeNode {
		node, depth := &TreeNode{Val: values[p]}, depths[p]+1
		if p < m && depths[p+1] == depth {
      p++
			node.Left = traverse()
		}
		if p < m && depths[p+1] == depth {
      p++
			node.Right = traverse()
		}
		return node
	}
	return traverse()
}