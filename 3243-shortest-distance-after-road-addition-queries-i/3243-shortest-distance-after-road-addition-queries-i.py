class GraphNode:
  def __init__(self, val, dist):
    self.val = val
    self.dist = dist
    self.joints = set()

class Solution:
  graph = None

  def buildGraph(self, n: int) -> None:
    self.graph = GraphNode(0, 0)
    self.map = {0: self.graph}
    node = self.graph
    for i in range(1, n):
      self.map[i] = GraphNode(i, node.dist + 1)
      node.joints.add(self.map[i])
      node = self.map[i]

  def updateGraph(self, node: GraphNode, dist: int) -> None:
    if node.dist > dist:
      node.dist = dist
      for joint in node.joints:
        self.updateGraph(joint, dist + 1)

  def shortestDistanceAfterQueries(self, n: int, queries: List[List[int]]) -> List[int]:
    self.buildGraph(n)
    ans = []
    for a, b in queries:
      if self.map[b] not in self.map[a].joints:
        self.map[a].joints.add(self.map[b])
        self.updateGraph(self.map[b], self.map[a].dist + 1)
        ans.append(self.map[n - 1].dist)

    return ans
        