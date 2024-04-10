class Solution:
  def findMode(self, root: Optional[TreeNode]) -> List[int]:
    res = []
    if not root:
      return []

    dict = {}
    def traverse(node):
      dict[node.val] = dict[node.val] + 1 if node.val in dict else 1
      if node.left: traverse(node.left)
      if node.right: traverse(node.right)
    traverse(root)

    items = sorted(dict.items(), key = lambda e: e[1], reverse = True)
    for item in items:
      if items[0][1] == item[1]:
        res.append(item[0])
      else:
        break

    return res
        