class GraphNode:
  def __init__(self, val, dist):
    self.val = val
    self.dist = dist
    self.joints = set()

class Solution:
  graph = None

  def updateGraph(self, node: GraphNode, dist: int) -> None:
    if node.dist > dist:
      node.dist = dist
      for joint in node.joints:
        self.updateGraph(joint, dist + 1)

  def shortestDistanceAfterQueries(self, n: int, queries: List[List[int]]) -> List[int]:
    # build graph and index
    self.graph = GraphNode(0, 0)
    m = {0: self.graph}
    node = self.graph
    for i in range(1, n):
      m[i] = GraphNode(i, node.dist + 1)
      node.joints.add(m[i])
      node = m[i]

    # update graph
    ans = []
    for a, b in queries:
      if m[b] not in m[a].joints:
        m[a].joints.add(m[b])
        self.updateGraph(m[b], m[a].dist + 1)
        ans.append(m[n - 1].dist)

    return ans
        