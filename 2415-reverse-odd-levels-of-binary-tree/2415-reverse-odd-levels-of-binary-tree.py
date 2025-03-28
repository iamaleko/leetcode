class Solution:
  def swap(self, left: TreeNode, right: TreeNode) -> None:
    left.val, right.val = right.val, left.val
    if left.left == None or left.left.left == None: return
    self.swap(left.left.left, right.right.right)
    self.swap(left.left.right, right.right.left)
    self.swap(left.right.left, right.left.right)
    self.swap(left.right.right, right.left.left)

  def reverseOddLevels(self, root: TreeNode) -> TreeNode:
    if root.left == None: return root
    self.swap(root.left, root.right)
    return root
        