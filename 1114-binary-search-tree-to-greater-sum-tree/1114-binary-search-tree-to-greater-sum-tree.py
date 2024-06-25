class Solution:
  def bstToGst(self, root: TreeNode, add = 0) -> TreeNode:
    def traverse(node, add = 0):
      node.val += traverse(node.right, add) if node.right else add
      return traverse(node.left, node.val) if node.left else node.val
    traverse(root)
    return root
    
    
        