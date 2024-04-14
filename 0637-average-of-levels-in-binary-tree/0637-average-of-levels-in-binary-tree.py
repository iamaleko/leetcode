# class Solution:
#   def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
#     if not root:
#       return []
#     cnt = []
#     sum = []
#     def traverse(node, level):
#       if level == len(cnt):
#         cnt.append(0)
#         sum.append(0)
#       cnt[level] += 1
#       sum[level] += node.val
#       if node.left:
#         traverse(node.left, level + 1)
#       if node.right:
#         traverse(node.right, level + 1)
#     traverse(root, 0)
#     for i in range(len(cnt)):
#       if cnt[i]:
#         sum[i] /= cnt[i]
#     return sum

class Solution:
  def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
    res = []
    queue = [root]
    while queue:
      sum = 0
      _queue = []
      for node in queue:
        sum += node.val
        if node.left: _queue.append(node.left)
        if node.right: _queue.append(node.right)
      res.append(sum / len(queue))
      queue = _queue
    return res

        