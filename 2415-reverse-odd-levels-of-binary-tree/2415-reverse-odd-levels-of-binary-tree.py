class Solution:
  def traverse(self, left: Optional[TreeNode], right: Optional[TreeNode]) -> None:
    left.val, right.val = right.val, left.val
    if left.left and left.left.left:
      self.traverse(left.left.left, right.right.right)
      self.traverse(left.left.right, right.right.left)
      self.traverse(left.right.left, right.left.right)
      self.traverse(left.right.right, right.left.left)

  def reverseOddLevels(self, root: TreeNode) -> TreeNode:
    if root.left:
      self.traverse(root.left, root.right)
    return root
        