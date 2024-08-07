# class Solution:
#   def countPairs(self, root: TreeNode, distance: int) -> int:
#     # build parent links and find leafs
#     q = deque([root])
#     parent = {}
#     leafs = deque()
#     while q:
#       node = q.popleft()
#       if node.left:
#         parent[node.left] = node
#         q.append(node.left)
#       if node.right:
#         parent[node.right] = node
#         q.append(node.right)
#       elif not node.left:
#         leafs.append(node)
    
#     # traverse tree from leafs to root and count leaf paths
#     dist = { None: 1 }
#     ans = 0
#     while leafs:
#       node = leafs.popleft()
#       if node.left and node.right:
#         for l in dist[node.left]:
#           for r in dist[node.right]:
#             if l + r <= distance:
#               ans += 1
#         dist[node] = [e + 1 for e in dist.pop(node.left) + dist.pop(node.right) if e + 1 < distance]
#       elif node.left:
#         dist[node] = [e + 1 for e in dist.pop(node.left) if e + 1 < distance]
#       elif node.right:
#         dist[node] = [e + 1 for e in dist.pop(node.right) if e + 1 < distance]
#       else:
#         dist[node] = [1]
#       if node in parent and parent[node].left in dist and parent[node].right in dist:
#         leafs.append(parent[node])

#     return ans

class Solution:
  def countPairs(self, root: TreeNode, distance: int) -> int:
    # build parent links and find leafs
    root.val = 0
    q = deque([root])
    parent = {}
    leafs = deque()
    while q:
      node = q.popleft()
      if node.left:
        node.left.val = node.val + 1
        parent[node.left] = node
        q.append(node.left)
      if node.right:
        node.right.val = node.val + 1
        parent[node.right] = node
        q.append(node.right)
      elif not node.left:
        leafs.append(node)
    
    # traverse tree from leafs to root and count leaf paths
    ans = 0
    while leafs:
      node = leafs.popleft()
      if node.left and node.right:
        node.left.val = [n for n in node.left.val if n - node.val < distance]
        node.right.val = [n for n in node.right.val if n - node.val < distance]
        for l in node.left.val:
          for r in node.right.val:
            if l - node.val + r - node.val <= distance:
              ans += 1
        node.val = node.left.val + node.right.val
      elif node.left:
        node.val = node.left.val
      elif node.right:
        node.val = node.right.val
      else:
        node.val = [node.val]
      if node is not root and ((
        not parent[node].left or type(parent[node].left.val) is list
      ) and (
        not parent[node].right or type(parent[node].right.val) is list
      )):
        leafs.append(parent[node])

    return ans
        