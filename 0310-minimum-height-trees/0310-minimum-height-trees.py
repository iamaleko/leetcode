class Solution:
  def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
    if not edges:
      return [i for i in range(n)]
    m = defaultdict(set)
    for a, b in edges:
      m[a].add(b)
      m[b].add(a)
    while True:
      queue = deque()
      for node in m.keys():
        if len(m[node]) == 1:
          queue.append(node)
      if len(m) <= 2:
        break
      while queue:
        node = queue.popleft()
        node_nbr = m[node].pop()
        del m[node]
        m[node_nbr].remove(node)
    return list(m.keys())
