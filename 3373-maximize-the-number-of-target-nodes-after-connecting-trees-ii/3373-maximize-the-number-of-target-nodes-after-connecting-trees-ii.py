class Solution:
  def markTree(self, tree: Dict[int, Set[int]], n: int, k: int) -> Dict[int, int]:
    a, b, v = set(), set(), set()
    def dfs(node: int, e: int) -> int:
      (b if e & 1 else a).add(node)
      v.add(node)
      e += 1
      for sub in tree[node]:
        if sub not in v:
          dfs(sub, e)
    dfs(0, k)
    an, bn = len(a), len(b)
    return {node: an if node in a else bn for node in range(n)}
  
  def buildTree(self, edges: List[List[int]]) -> Tuple[Dict[int, Set[int]], int]:
    n = 0
    tree = {}
    for a, b in edges:
      if a not in tree: tree[a] = set()
      if b not in tree: tree[b] = set()
      tree[a].add(b)
      tree[b].add(a)
      n = max(a, b, n)
    return tree, n + 1 if n else 0

  def maxTargetNodes(self, edges1: List[List[int]], edges2: List[List[int]]) -> List[int]:
    tree1, n1 = self.buildTree(edges1)
    tree2, n2 = self.buildTree(edges2)
    index1 = self.markTree(tree1, n1, 0)
    best = max(self.markTree(tree2, n2, 1).values())
    return [best + index1[node] for node in range(n1)]