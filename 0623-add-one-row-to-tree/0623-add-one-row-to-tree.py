# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def addOneRow(self, left: Optional[TreeNode], val: int, depth: int, right: Optional[TreeNode] = None) -> Optional[TreeNode]:
    if depth == 1:
      return TreeNode(val, left, None) if left else TreeNode(val, None, right)
    depth -= 1
    node = left if left else right
    if node:
      if node.left or depth == 1:
        node.left = self.addOneRow(node.left, val, depth)
      if node.right or depth == 1:
        node.right = self.addOneRow(None, val, depth, node.right)
    return node
