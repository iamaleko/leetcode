class Solution:
  def removeLeafNodes(self, root: Optional[TreeNode], target: int) -> Optional[TreeNode]:
    def traverse(node):
      if node.left and traverse(node.left):
        node.left = None
      if node.right and traverse(node.right):
        node.right = None
      return not node.left and not node.right and node.val == target

    if traverse(root):
      root = None
    return root

        