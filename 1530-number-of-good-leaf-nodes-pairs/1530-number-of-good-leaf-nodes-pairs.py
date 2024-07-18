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
        for i in range(len(dist[node.right])):
          dist[node.right][i] += 1
        for l in range(len(dist[node.left])):
          dist[node.left][l] += 1
          for r in range(len(dist[node.right])):
            if dist[node.left][l] + dist[node.right][r] <= distance:
              ans += 1
        dist[node] = dist[node.left] + dist[node.right]
        del dist[node.left]
        del dist[node.right]

      elif node.left:
        for i in range(len(dist[node.left])):
          dist[node.left][i] += 1
        dist[node] = dist[node.left]
        del dist[node.left]

      elif node.right:
        for i in range(len(dist[node.right])):
          dist[node.right][i] += 1
        dist[node] = dist[node.right]
        del dist[node.right]
      else:
        dist[node] = [0]

      if node in parent and (
        not parent[node].left or parent[node].left in dist
      ) and (
        not parent[node].right or parent[node].right in dist
      ):
        leafs.append(parent[node])

    return ans
        