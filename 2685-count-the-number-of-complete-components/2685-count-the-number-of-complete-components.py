class Solution:
  def countCompleteComponents(self, n: int, edges: List[List[int]]) -> int:
    parent = {}
    graph = defaultdict(set)
    def find(n):
      if n not in parent:
        parent[n] = n
      while n != parent[n]:
        parent[n] = parent[parent[n]]
        n = parent[n]
      return n
    for a,b in edges:
      graph[a].add(b)
      graph[b].add(a)
      a = find(a)
      b = find(b)
      if a != b: parent[a] = b
    sets = defaultdict(int)
    for i in range(n):
      sets[find(i)] += 1
    print(parent, sets, graph)
    ans = 0
    for n, c in sets.items():
      c -= 1
      if len(graph[n]) == c:
        for s in graph[n]:
          if len(graph[s]) != c:
            break
        else:
          ans += 1
    return ans
      