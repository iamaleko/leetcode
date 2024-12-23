# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def traverse(self, node: TreeNode, level: int) -> None:
    if len(self.levels) - 1 < level: self.levels.append([])
    self.levels[level].append(node.val)
    if node.left: self.traverse(node.left, level + 1)
    if node.right: self.traverse(node.right, level + 1)

  def sort(self, level: List[int]) -> int:
    target = sorted(level)
    current = { num: i for i, num in enumerate(level)}
    ans = 0
    for l, t in zip(level, target):
      if l != t:
        level[current[t]] = l
        current[l] = current[t]
        ans += 1
    return ans

  def minimumOperations(self, root: Optional[TreeNode]) -> int:
    self.levels = []
    self.traverse(root, 0)
    ans = 0
    for level in self.levels:
      ans += self.sort(level)
    return ans
        