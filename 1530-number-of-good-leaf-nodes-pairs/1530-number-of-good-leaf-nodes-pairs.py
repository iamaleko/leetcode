class Solution:
  def countPairs(self, root: TreeNode, distance: int) -> int:
    # build parent links and find leafs
    q = deque([root])
    parent = {}
    leafs = deque()
    while q:
      node = q.popleft()
      if node.left:
        parent[node.left] = node
        q.append(node.left)
      if node.right:
        parent[node.right] = node
        q.append(node.right)
      elif not node.left:
        leafs.append(node)
    
    # traverse tree from leafs to root and count leaf paths
    dist = { None: 1 }
    ans = 0
    while leafs:
      node = leafs.popleft()
      if node.left and node.right:
        left = dist[node.left]
        right = dist[node.right]
        for l in left:
          for r in right:
            if l + r <= distance:
              ans += 1
        dist[node] = [e + 1 for e in left if e + 1 < distance] + [e + 1 for e in right if e + 1 < distance]
        del dist[node.left]
        del dist[node.right]

      elif node.left:
        dist[node] = [e + 1 for e in dist[node.left] if e + 1 < distance]
        del dist[node.left]

      elif node.right:
        dist[node] = [e + 1 for e in dist[node.right] if e + 1 < distance]
        del dist[node.right]
      else:
        dist[node] = [1]

      if node in parent and parent[node].left in dist and parent[node].right in dist:
        leafs.append(parent[node])

    return ans
        