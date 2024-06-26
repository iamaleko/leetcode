# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def balanceBST(self, root: TreeNode) -> TreeNode:
    vals = []
    def traverse(node):
      vals.append(node.val)
      if node.left:
        traverse(node.left)
      if node.right:
        traverse(node.right)
    traverse(root)
    
    vals.sort()

    def build(i,j):
      center = i + (j - i) // 2
      node = TreeNode(vals[center])
      if center > i:
        node.left = build(i, center - 1)
      if center < j:
        node.right = build(center + 1, j)
      return node

    return build(0, len(vals) - 1)
        