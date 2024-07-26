class Solution:
  def findTheCity(self, n: int, edges: List[List[int]], distanceThreshold: int) -> int:
    m = {}
    for a, b, cost in edges:
      if a not in m:
        m[a] = {}
      if b not in m:
        m[b] = {}
      m[a][b] = cost
      m[b][a] = cost
    
    dist = {}
    for i in range(n):
      dist[i] = { i: 0 }

    for i in range(n):
      h = [(0, i)]
      while h:
        _, a = heappop(h)
        if a in m:
          for b in m[a].keys():
            if dist[i][a] + m[a][b] <= distanceThreshold and (
              b not in dist[i] or dist[i][b] > dist[i][a] + m[a][b]
            ):
              dist[i][b] = dist[i][a] + m[a][b]
              # dist[b][i] = dist[i][a] + m[a][b]
              heappush(h, (dist[i][a] + m[a][b], b))
    
    ans = 0
    count = math.inf
    for i in range(n):
      if len(dist[i]) <= count:
        count = len(dist[i])
        ans = i
    return ans