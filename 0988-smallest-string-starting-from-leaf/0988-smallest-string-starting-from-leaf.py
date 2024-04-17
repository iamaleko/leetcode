# slower because of list using as queue
# class Solution:
#   def smallestFromLeaf(self, root: Optional[TreeNode]) -> str:
#     res = None
#     queue = [(root, '')]
#     while queue:
#       node, s = queue.pop()
#       s = chr(97 + node.val) + s
#       if node.left or node.right:
#         if node.left:
#           queue.append((node.left, s))
#         if node.right:
#           queue.append((node.right, s))
#       elif not res or res > s:
#         res = s
#     return res

# faster because of deque linked list realization 
# class Solution:
#   def smallestFromLeaf(self, root: Optional[TreeNode]) -> str:
#     res = None
#     queue = deque([(root, '')])
#     while queue:
#       node, s = queue.pop()
#       s = chr(97 + node.val) + s
#       if node.left or node.right:
#         if node.left:
#           queue.append((node.left, s))
#         if node.right:
#           queue.append((node.right, s))
#       elif not res or res > s:
#         res = s
#     return res

class Solution:
  def smallestFromLeaf(self, root: Optional[TreeNode]) -> str:
    res = None
    queue = [None] * 8500
    i = 0
    queue[i] = (root, '')
    while i > -1:
      node, s = queue[i]
      i -= 1
      s = chr(97 + node.val) + s
      if node.left or node.right:
        if node.left:
          i += 1
          queue[i] = (node.left, s)
        if node.right:
          i += 1
          queue[i] = (node.right, s)
      elif not res or res > s:
        res = s
    return res

# slower because of function call stack
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