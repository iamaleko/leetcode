# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def traverse(self, arr: List[int], node: TreeNode, level: int) -> None:
    if len(arr) - 1 < level:
      arr.append(-inf)
    if arr[level] < node.val:
       arr[level] = node.val
    if node.left:
      self.traverse(arr, node.left, level + 1)
    if node.right:
      self.traverse(arr, node.right, level + 1)

  def largestValues(self, root: Optional[TreeNode]) -> List[int]:
    ans = []
    if root:
      self.traverse(ans, root, 0)
    return ans
        