class Solution:
  def largestPathValue(self, colors: str, edges: List[List[int]]) -> int:
    n = len(colors)
    graph = {}
    cache = [0] * (26 * n)
    groups = [ord(color) - 97 for color in colors]
    indegree = [0] * n

    for a, b in edges:
      if a == b:
        return -1
      if b not in graph:
        graph[b] = set()
      graph[b].add(a)
      indegree[a] += 1
      
    leaves = deque()
    for node in range(n):
      if not indegree[node]:
        leaves.append(node)

    if not leaves:
      return -1

    def merge(a, b):
      a *= 26
      b *= 26
      for i in range(26):
        if cache[a + i] < cache[b + i]:
          cache[a + i] = cache[b + i]
    
    while leaves:
      node = leaves.popleft()
      cache[node * 26 + groups[node]] += 1
      if node in graph:
        for parent in graph[node]:
          indegree[parent] -= 1
          if indegree[parent] < 0:
            return -1
          merge(parent, node)
          if indegree[parent] == 0:
           leaves.append(parent)
      cache[node * 26 + groups[node]] -= 1

    for node in range(n):
      if node not in graph:
        cache[node * 26 + groups[node]] += 1

    return -1 if any(indegree) else max(cache)
