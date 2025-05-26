class Solution:
  def largestPathValue(self, colors: str, edges: List[List[int]]) -> int:
    n = len(colors)
    ans = [0] * 26
    graph = {}
    cache = {node: [0] * 26 for node in range(n)}
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
      ans = False
      for i in range(26):
        if a[i] < b[i]:
          a[i] = b[i]
          ans = True
      return ans
    
    while leaves:
      node = leaves.popleft()
      cache[node][groups[node]] += 1
      if node in graph:
        for parent in graph[node]:
          indegree[parent] -= 1
          if indegree[parent] < 0:
            return -1
          merge(cache[parent], cache[node])
          if indegree[parent] == 0:
           leaves.append(parent)
      else:
        merge(ans, cache[node])
      cache[node][groups[node]] -= 1
    return -1 if sum(indegree) > 0 else max(ans)
