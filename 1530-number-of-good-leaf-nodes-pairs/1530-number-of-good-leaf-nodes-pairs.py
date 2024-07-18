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
      if node.left == None and node.right == None:
        leafs.append(node)
    
    # traverse tree from leafs to root and count leaf paths
    dist = {}
    ans = 0
    while leafs:
      node = leafs.popleft()
      if node.left and node.right:
        for l in dist[node.left]:
          for r in dist[node.right]:
            if l + r <= distance:
              ans += 1
        dist[node] = [e + 1 for e in dist[node.left]] + [e + 1 for e in dist[node.right]]
        del dist[node.left]
        del dist[node.right]

      elif node.left:
        dist[node] = [e + 1 for e in dist[node.left]]
        del dist[node.left]

      elif node.right:
        dist[node] = [e + 1 for e in dist[node.right]]
        del dist[node.right]
      else:
        dist[node] = [1]

      if node in parent and (
        not parent[node].left or parent[node].left in dist
      ) and (
        not parent[node].right or parent[node].right in dist
      ):
        leafs.append(parent[node])

    return ans
        