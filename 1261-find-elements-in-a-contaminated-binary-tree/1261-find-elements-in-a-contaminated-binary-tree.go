/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
type FindElements struct {
	Map map[int]bool
}

func Constructor(root *TreeNode) FindElements {
  m := map[int]bool{}
	var populate func(node *TreeNode)
	populate = func(node *TreeNode) {
    m[node.Val] = true
		if node.Left != nil {
			node.Left.Val = 2*node.Val + 1
			populate(node.Left)
		}
		if node.Right != nil {
			node.Right.Val = 2*node.Val + 2
			populate(node.Right)
		}
	}
	root.Val = 0
	populate(root)
	return FindElements{m}
}
func (this *FindElements) Find(target int) bool {
  return this.Map[target]
}