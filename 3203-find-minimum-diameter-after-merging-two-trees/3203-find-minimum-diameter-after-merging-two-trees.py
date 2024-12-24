class Solution:
  def buildGraph(self, edges: List[List[int]]) -> Dict[int, int]:
    graph = defaultdict(set)
    for a, b in edges:
      graph[a].add(b)
      graph[b].add(a)
    return graph

  def pealGraph(self, graph: Dict[int, int]) -> (int, int):
    leafs, path = set(), {}
    for node in graph:
      if len(graph[node]) <= 1:
        leafs.add(node)
        path[node] = (0, 0)
    while leafs:
      stems = set()
      for leaf in leafs:
        for parent in graph[leaf]:
          graph[parent].remove(leaf)
          if len(graph[parent]) <= 1:
            if parent in path:
              longest = max(path[leaf][0] + 1, path[parent][0])
              diam = max(path[parent][1], path[parent][0] + longest)
              path[parent] = (longest, diam)
            else:
              path[parent] = (path[leaf][0] + 1, path[leaf][0] + 1)
            if not len(graph[parent]):
              return path[parent]
            stems.add(parent)
      leafs = stems
    return (0, 0)

  def minimumDiameterAfterMerge(self, edges1: List[List[int]], edges2: List[List[int]]) -> int:
    longest1, diam1 = self.pealGraph(self.buildGraph(edges1))
    longest2, diam2 = self.pealGraph(self.buildGraph(edges2))
    return max(diam1, diam2, longest1 + longest2 + 1)
        