class Solution:
  def largestPathValue(self, colors: str, edges: List[List[int]]) -> int:
    n = len(colors)
    graph = defaultdict(set)
    cache = [0] * (26 * n)
    groups = [ord(color) - 97 for color in colors]
    indegree = [0] * n

    for a, b in edges:
      graph[b].add(a)
      indegree[a] += 1
      
    leaves = deque()
    for node in range(n):
      if not indegree[node]:
        leaves.append(node)

    if not leaves:
      return -1
    
    while leaves:
      node = leaves.popleft()
      cache[node * 26 + groups[node]] += 1
      if node in graph:
        np = node * 26
        for parent in graph[node]:
          indegree[parent] -= 1
          if indegree[parent] < 0:
            return -1
          pp = parent * 26
          for i in range(26):
            if cache[pp + i] < cache[np + i]:
              cache[pp + i] = cache[np + i]
          if indegree[parent] == 0:
           leaves.append(parent)
      cache[node * 26 + groups[node]] -= 1

    for node in range(n):
      if node not in graph:
        cache[node * 26 + groups[node]] += 1

    return -1 if any(indegree) else max(cache)
