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
    elif left:
      left.left = self.addOneRow(left.left, val, depth - 1)
      left.right = self.addOneRow(None, val, depth - 1, left.right)
      return left
    elif right:
      right.left = self.addOneRow(right.left, val, depth - 1)
      right.right = self.addOneRow(None, val, depth - 1, right.right)
      return right
    else:
      return None
