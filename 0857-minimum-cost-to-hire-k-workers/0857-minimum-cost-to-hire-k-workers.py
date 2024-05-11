class Solution:
  def mincostToHireWorkers(self, quality: List[int], wage: List[int], k: int) -> float:
    if k == 1:
      return min(wage)
    
    # worker with bigger w/q will be base for wages of workers to the left
    ratio = [(w / q, q, w) for q, w in zip(quality, wage)]
    ratio.sort(key = lambda x: x[0])

    ans = math.inf
    h = []
    qsum = 0
    # fill heap and quality sum
    for i in range(k - 1):
      qsum += ratio[i][1]
      heappush(h, -ratio[i][1])
    # move forward and remove most expensive worker so far
    for i in range(k - 1, len(ratio)):
      ans = min(ans, ratio[i][2] + qsum * ratio[i][0])
      qsum += heappop(h) + ratio[i][1]
      heappush(h, -ratio[i][1])

    return ans