class Solution:
  def tolopogicalSort(self, graph) -> List[int] | None:
    state = {}
    precedence = []
    def dfs(node):
      if node in state:
        if state[node] == 1:
          return False
      else:
        if node in graph:
          state[node] = 1
          for _node in graph[node]:
            if not dfs(_node):
              return False
        state[node] = 2
        precedence.append(node)
      return True
    for node in graph.keys():
      if not dfs(node):
        return None
    precedence.reverse()
    return precedence

  def buildMatrix(self, k: int, ab: List[List[int]], lr: List[List[int]]) -> List[List[int]]:
    # above -> below sort
    ab_graph = {}
    for a, b in ab:
      if a not in ab_graph:
        ab_graph[a] = set()
      ab_graph[a].add(b)
    if not (ab_sorted := self.tolopogicalSort(ab_graph)):
      return [] # cicle in above -> below graph
    

    # left -> right sort
    lr_graph = {}
    for l, r in lr:
      if l not in lr_graph:
        lr_graph[l] = set()
      lr_graph[l].add(r)
    if not (lr_sorted := self.tolopogicalSort(lr_graph)):
      return [] # cicle in left -> right graph
    
    # add missed nums
    for ls_sorted in [ab_sorted, lr_sorted]:
      if len(ls_sorted) < k:
        s = set(ls_sorted)
        for n in range(1, k + 1):
          if n not in s:
            ls_sorted.append(n)

    # merge coordinates and build matrix
    m = [[0] * k for i in range(k)]
    coords = [[0, 0, i + 1] for i in range(k)]
    for i in range(k):
      coords[ab_sorted[i] - 1][0] = i
      coords[lr_sorted[i] - 1][1] = i
    for y, x, n in coords:
      m[y][x] = n

    return m
        