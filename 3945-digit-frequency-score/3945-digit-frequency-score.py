class Solution:
  def digitFrequencyScore(self, n: int) -> int:
    count = {}
    while n:
      d = n % 10
      count[d] = count[d] + 1 if d in count else 1
      n = int(n / 10)
    ans = 0
    for d in count:
      ans += d * count[d]
    return ans