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
      if node.left:
        traverse(node.left)
      vals.append(node.val)
      if node.right:
        traverse(node.right)
    traverse(root)

    def build(i,j):
      center = i + (j - i) // 2
      return TreeNode(
        vals[center],
        build(i, center - 1) if center > i else None,
        build(center + 1, j) if center < j else None
      )

    return build(0, len(vals) - 1)
        