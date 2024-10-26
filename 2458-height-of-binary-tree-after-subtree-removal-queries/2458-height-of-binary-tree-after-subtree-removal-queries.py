class Solution:
  def treeQueries(self, root: Optional[TreeNode], queries: List[int]) -> List[int]:
    max_height_after_removal = [0] * 100001
    self.current_max_height = 0

    def _ltr(node, current_height):
      max_height_after_removal[node.val] = self.current_max_height
      if current_height > self.current_max_height:
        self.current_max_height = current_height
      current_height += 1
      if node.left:
        _ltr(node.left, current_height)
      if node.right:
        _ltr(node.right, current_height)

    def _rtl(node, current_height):
      if self.current_max_height > max_height_after_removal[node.val]:
        max_height_after_removal[node.val] = self.current_max_height
      if current_height > self.current_max_height:
        self.current_max_height = current_height
      current_height += 1
      if node.right:
        _rtl(node.right, current_height)
      if node.left:
        _rtl(node.left, current_height)

    if root:
      _ltr(root, 0)
      self.current_max_height = 0
    if root:
      _rtl(root, 0)

    return [max_height_after_removal[q] for q in queries]