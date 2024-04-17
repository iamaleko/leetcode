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

# faster because of deque native linked list realization 
class Solution:
  def smallestFromLeaf(self, root: Optional[TreeNode]) -> str:
    res = None
    queue = deque([(root, '')])
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

# simple linked list realization, little bit slower than deque but faster than list
# class ListNode:
#   def __init__(self, node, s, next = None):
#     self.node = node
#     self.s = s
#     self.next = next

# class Solution:
#   def smallestFromLeaf(self, root: Optional[TreeNode]) -> str:
#     res = None
#     head = ListNode(root, '')
#     while head:
#       node = head.node
#       s = chr(97 + node.val) + head.s
#       head = head.next
#       if node.left or node.right:
#         if node.left:
#           head = ListNode(node.left, s, head)
#         if node.right:
#           head = ListNode(node.right, s, head)
#       elif not res or res > s:
#         res = s
#     return res

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