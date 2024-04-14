# class Solution:
#   def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
#     sum = 0
#     queue = [root]
#     while queue:
#       node = queue.pop()
#       if node.left:
#         if not node.left.left and not node.left.right:
#           sum += node.left.val
#         queue.append(node.left)
#       if node.right:
#         queue.append(node.right)
#     return sum

class Solution:
  def sumOfLeftLeaves(self, node: Optional[TreeNode]) -> int:
    sum = 0
    if node.left:
      if not node.left.left and not node.left.right:
        sum += node.left.val
      sum += self.sumOfLeftLeaves(node.left)
    if node.right:
      sum += self.sumOfLeftLeaves(node.right)
    return sum
        