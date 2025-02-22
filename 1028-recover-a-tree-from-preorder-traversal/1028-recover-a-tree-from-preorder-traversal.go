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
	m := len(values)-1
	var traverse func(p int) (*TreeNode, int)
	traverse = func(p int) (*TreeNode, int) {
    node, childDepth := &TreeNode{Val: values[p]}, depths[p]+1
		if p < m && depths[p+1] == childDepth {
			node.Left, p = traverse(p+1)
		}
		if p < m && depths[p+1] == childDepth {
			node.Right, p = traverse(p+1)
		}
		return node, p
	}
  root, _ := traverse(0)
	return root
}