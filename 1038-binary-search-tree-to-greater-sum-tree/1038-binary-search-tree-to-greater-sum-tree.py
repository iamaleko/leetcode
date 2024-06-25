class Solution:
  def bstToGst(self, root: TreeNode) -> TreeNode:

    def traverse(node, add = 0):
      val = node.val
      if not node.right:
        val += add
      if node.right:
        val += traverse(node.right, add)
      # print(node.val, val)
      node.val = val
      if node.left:
        # print('>', val)
        val = traverse(node.left, val)
      return val

    traverse(root)
    return root
    
    
        