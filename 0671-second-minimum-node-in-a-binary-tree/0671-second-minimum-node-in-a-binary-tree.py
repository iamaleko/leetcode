class Solution:
  def __init__(self):
    self.a = None
    self.b = None
  def traverse(self, node):
    if not self.a or self.a >= node.val:
      self.a = node.val
    elif not self.b or self.b > node.val:
      self.b = node.val
    if node.left:
      self.traverse(node.left)
      self.traverse(node.right)
  def findSecondMinimumValue(self, root: Optional[TreeNode]) -> int:
    self.a = None
    self.b = None
    self.traverse(root)
    return self.b if self.a and self.b and self.a < self.b else -1

    




        