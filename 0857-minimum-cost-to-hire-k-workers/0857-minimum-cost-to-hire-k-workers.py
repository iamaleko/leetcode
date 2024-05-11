class Solution:
  def mincostToHireWorkers(self, quality: List[int], wage: List[int], k: int) -> float:
    if k == 1:
      return min(wage)
      
    ratio = [(w / q, q, w) for q, w in zip(quality, wage)]
    ratio.sort(key = lambda x: x[0])

    ans = math.inf
    h = []
    qsum = 0
    for i in range(len(ratio)):
      if i >= k - 1:
        ans = min(ans, ratio[i][2] + qsum * ratio[i][0])
        qsum += heappop(h)
      qsum += ratio[i][1]
      heappush(h, -ratio[i][1])

    return ans