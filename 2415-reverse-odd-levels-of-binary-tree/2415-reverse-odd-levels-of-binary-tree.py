class Solution:
  def traverse(self, isOdd: bool, left: Optional[TreeNode], right: Optional[TreeNode]) -> None:
    if left:
      if isOdd: left.val, right.val = right.val, left.val
      self.traverse(not isOdd, left.left, right.right)
      self.traverse(not isOdd, left.right, right.left)

  def reverseOddLevels(self, root: TreeNode) -> TreeNode:
    self.traverse(True, root.left, root.right)
    return root
        