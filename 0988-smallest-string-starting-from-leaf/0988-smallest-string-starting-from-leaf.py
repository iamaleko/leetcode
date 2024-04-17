class Solution:
  def smallestFromLeaf(self, root: Optional[TreeNode]) -> str:
    res = None
    queue = [(root, '')]
    while queue:
      node, s = queue.pop()
      s = chr(97 + node.val) + s
      if node.left or node.right:
        if node.left:
          queue.append((node.left, s))
        if node.right:
          queue.append((node.right, s))
      else:
        if not res or res > s:
          res = s
    return res