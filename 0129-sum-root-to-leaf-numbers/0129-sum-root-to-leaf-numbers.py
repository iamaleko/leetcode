# class Solution:
#   def sumNumbers(self, root: Optional[TreeNode]) -> int:
#     self.res = 0
#     def traverse(node, n):
#       n = n * 10 + node.val
#       if not node.left and not node.right:
#         self.res += n
#       else:
#         if node.left:
#           traverse(node.left, n)
#         if node.right:
#           traverse(node.right, n)
#     traverse(root, 0)
#     return self.res

class Solution:
  def sumNumbers(self, root: Optional[TreeNode]) -> int:
    def traverse(node, n):
      if not node.left and not node.right:
        return n * 10 + node.val
      else:
        n = n * 10 + node.val
        return (traverse(node.left, n) if node.left else 0) + (traverse(node.right, n) if node.right else 0)
    return traverse(root, 0)
        