class Solution:
  def buildGraph(self, edges: List[List[int]]) -> Dict[int, int]:
    graph = defaultdict(set)
    for a, b in edges:
      graph[a].add(b)
      graph[b].add(a)
    return graph

  def pealGraph(self, graph: Dict[int, int]) -> int:
    ans = -1
    leafs = set()
    for node in graph:
      if len(graph[node]) <= 1:
        leafs.add(node)
    while leafs:
      ans += 1
      stems = set()
      for leaf in leafs:
        for parent in graph[leaf]:
          graph[parent].remove(leaf)
          if len(graph[parent]) <= 1:
            stems.add(parent)
        del graph[leaf]
      leafs = stems
    return max(ans, 0)

  def minimumDiameterAfterMerge(self, edges1: List[List[int]], edges2: List[List[int]]) -> int:
    graph1 = self.buildGraph(edges1)
    graph2 = self.buildGraph(edges2)
    max1 = self.pealGraph(graph1)
    max2 = self.pealGraph(graph2)
    return max1 + max2 + 1
        