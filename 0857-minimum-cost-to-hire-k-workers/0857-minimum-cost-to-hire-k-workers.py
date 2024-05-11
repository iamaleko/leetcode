class Solution:
  def mincostToHireWorkers(self, quality: List[int], wage: List[int], k: int) -> float:
    if len(wage) == 1:
      return wage[0]
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



    # h = []
    # for p in range(len(ratio)):
    #   heappush(h, (ratio[p][1] * ratio[-1][0], i))

    # best = []
    # for _ in range(k):
    #   best.append(heappop(h))
    # best.sort(key = lambda x: x[1])
    # print(ratio)
    # print(best)

    # j = best[-1][1]
    # total = ratio[j][2]
    # for i in range(k - 1):
    #   p = best[i][1]
    #   total += ratio[p][1] * ratio[j][0]

    # return total
        