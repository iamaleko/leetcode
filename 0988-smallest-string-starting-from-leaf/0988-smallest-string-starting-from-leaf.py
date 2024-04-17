class Solution:
  def smallestFromLeaf(self, root: Optional[TreeNode]) -> str:
    res = None
    queue = [(root, '')]
    while queue:
      node, s = queue.pop()
      s = chr(97 + node.val) + s
      if node.left or node.right:
        if node.left:
          queue.append((node.left, s))
        if node.right:
          queue.append((node.right, s))
      elif not res or res > s:
        res = s
    return res

# class Solution:
#   def tr(self, node, s):
#     s = chr(97 + node.val) + s
#     if node.left or node.right:
#       if node.left:
#         self.tr(node.left, s)
#       if node.right:
#         self.tr(node.right, s)
#     elif not self.res or self.res > s:
#       self.res = s
#   def smallestFromLeaf(self, root: Optional[TreeNode]) -> str:
#     self.res = None
#     self.tr(root, '')
#     return self.res