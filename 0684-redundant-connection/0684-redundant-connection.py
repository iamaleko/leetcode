class Solution:
  def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
    graph = defaultdict(set)
    for a, b in edges:
      graph[a].add(b)
      graph[b].add(a)
    leafs = deque()
    for node in graph:
      if len(graph[node]) == 1:
        leafs.append(node)
    while leafs:
      leaf = leafs.pop()
      node = next(iter(graph[leaf]))
      graph[node].remove(leaf)
      if len(graph[node]) == 1:
        leafs.append(node)
      del graph[leaf]
    for a, b in edges[::-1]:
      if a in graph and b in graph[a]:
        return [a, b]
        