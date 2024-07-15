# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def createBinaryTree(self, descriptions: List[List[int]]) -> Optional[TreeNode]:
    roots = {}
    nodes = {}

    for parent, child, is_left in descriptions:
      # find or create parent
      if parent not in nodes and parent not in roots:
        roots[parent] = TreeNode(parent)
        nodes[parent] = roots[parent]
        # print(f"add {parent} to roots")
      parent = nodes[parent]

      # find or create child
      if child not in nodes and child not in roots:
        nodes[child] = TreeNode(child)
        # print(f"add {child} to nodes")
      child = nodes[child]

      # remove child from roots
      if child.val in roots:
        # print(f"remove {child.val} from roots")
        del roots[child.val]

      # link nodes
      if is_left:
        parent.left = child
        # print(f"link {child.val} to {parent.val} as left")
      else:
        parent.right = child
        # print(f"link {child.val} to {parent.val} as right")

    return next(iter(roots.values()))