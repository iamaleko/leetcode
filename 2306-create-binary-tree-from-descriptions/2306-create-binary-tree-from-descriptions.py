class Solution:
  def createBinaryTree(self, descriptions: List[List[int]]) -> Optional[TreeNode]:
    roots = {}
    nodes = {}

    for parent, child, is_left in descriptions:
      if parent not in nodes:
        roots[parent] = TreeNode(parent)
        nodes[parent] = roots[parent]

      if child not in nodes:
        nodes[child] = TreeNode(child)
        
      if child in roots:
        del roots[child]

      if is_left:
        nodes[parent].left = nodes[child]
      else:
        nodes[parent].right = nodes[child]

    return next(iter(roots.values()))