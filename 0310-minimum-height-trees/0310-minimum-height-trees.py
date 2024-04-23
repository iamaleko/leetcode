class Solution:
  def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
    if not edges:
      return [i for i in range(n)]
    m = defaultdict(set)
    for a, b in edges:
      m[a].add(b)
      m[b].add(a)
    queue = deque()
    for node in m.keys():
      if len(m[node]) == 1:
        queue.append(node)
    cnt = len(queue)
    while True:
      if len(m) <= 2:
        break
      for _ in range(cnt):
        node = queue.popleft()
        node_nbr = m[node].pop()
        del m[node]
        m[node_nbr].remove(node)
        if len(m[node_nbr]) == 1:
          queue.append(node_nbr)
      cnt = len(queue)
    return list(m.keys())
