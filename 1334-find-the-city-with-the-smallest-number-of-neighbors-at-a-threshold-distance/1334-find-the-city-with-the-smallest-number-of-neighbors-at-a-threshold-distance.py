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
    
    ans = None
    count = math.inf
    for i in range(n):
      cities = { i: 0 }
      h = [(0, i)]
      while h:
        dist, a = heappop(h)
        if a in m:
          for b in m[a].keys():
            if (dist + m[a][b] <= distanceThreshold) and (b not in cities or cities[b] > dist + m[a][b]):
              cities[b] = dist + m[a][b]
              heappush(h, (cities[b], b))
              if len(cities) > count:
                h.clear()
                break
      if len(cities) <= count:
        count = len(cities)
        ans = i

    return ans