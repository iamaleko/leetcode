class Solution:
  def indexTree(self, tree: Dict[int, Set[int]], n: int, k: int) -> Dict[int, int]:
    visited = set()
    def dfs(node: int, k: int) -> int:
      ans = 1
      if k > 0:
        visited.add(node)
        for sub in tree[node]:
          if sub not in visited:
            ans += dfs(sub, k - 1)
        visited.remove(node)
      return ans
    return {node: dfs(node, k) for node in range(n)}
  
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

  def maxTargetNodes(self, edges1: List[List[int]], edges2: List[List[int]], k: int) -> List[int]:
    tree1, n1 = self.buildTree(edges1)
    if not k:
      return [1] * n1
    tree2, n2 = self.buildTree(edges2)
    index1 = self.indexTree(tree1, n1, k)
    index2 = self.indexTree(tree2, n2, k - 1)
    best = max(index2.values())
    return [best + index1[node] for node in range(n1)]