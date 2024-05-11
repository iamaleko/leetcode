class Solution:
  def mincostToHireWorkers(self, quality: List[int], wage: List[int], k: int) -> float:
    if k == 1:
      return min(wage)
    
    # worker with bigger w/q will be base for wages of workers to the left
    ratio = [(w / q, q, w) for q, w in zip(quality, wage)]
    ratio.sort(key = lambda x: x[0])

    ans = math.inf
    h = [] # max heap for workers based on their quality
    qsum = 0 # sum of workers quality to the left of base worker
    # fill heap and quality sum
    # for i in range(k - 1):
    #   qsum += ratio[i][1]
    #   heappush(h, -ratio[i][1])
    for worker in ratio[0:k - 1]:
      qsum += worker[1]
      heappush(h, -worker[1])
    # move forward and remove most expensive worker so far
    # for i in range(k - 1, len(ratio)):
    #   ans = min(ans, ratio[i][2] + qsum * ratio[i][0])
    #   qsum += heappop(h) + ratio[i][1]
    #   heappush(h, -ratio[i][1])
    for worker in ratio[k - 1:]:
      ans = min(ans, worker[2] + qsum * worker[0])
      qsum += heappop(h) + worker[1]
      heappush(h, -worker[1])

    return ans