class Solution:
  def addOneRow(self, node: Optional[TreeNode], val: int, depth: int, is_left: bool = True) -> Optional[TreeNode]:
    if depth == 1:
      return TreeNode(val, node, None) if is_left else TreeNode(val, None, node)
    depth -= 1
    if node:
      if node.left or depth == 1:
        node.left = self.addOneRow(node.left, val, depth, True)
      if node.right or depth == 1:
        node.right = self.addOneRow(node.right, val, depth, False)
    return node
