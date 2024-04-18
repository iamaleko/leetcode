class Solution:
  def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
    self.res = []
    def tr(node, level):
      if level == len(self.res):
        self.res.append([])
      self.res[level].append(node.val)
      if node.left:
        tr(node.left, level + 1)
      if node.right:
        tr(node.right, level + 1)
    if root:
      tr(root, 0)
    return self.res
        