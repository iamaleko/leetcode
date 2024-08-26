class Solution:
  def postorder(self, root: 'Node') -> List[int]:
    ans = []
    def traverse(node: 'Node') -> None:
      for child in node.children:
        traverse(child)
      ans.append(node.val)
    if root:
      traverse(root)
    return ans
        