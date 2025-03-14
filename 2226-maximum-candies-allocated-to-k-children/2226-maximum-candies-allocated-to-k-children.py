class Solution:
  def maximumCandies(self, candies: List[int], k: int) -> int:
    if len(candies) >= k:
      candies.sort(reverse=True)
      ans = 0
      p, n = 0, len(candies)
      while n - p >= k:
        p += k
        ans += candies[p - 1]
      return ans
    elif sum(candies) < k:
      return 0
    else:
      n = len(candies)
      candies = [-x for x in candies]
      heapify(candies)
      while n < k:
        a = candies[0] // 2
        b = candies[0] - a
        heappushpop(candies, a)
        heappush(candies, b)
        n += 1
      return -max(candies)

