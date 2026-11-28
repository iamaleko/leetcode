class Solution:
  def digitFrequencyScore(self, n: int) -> int:
    ans = 0
    while n:
      ans += n % 10
      n = int(n / 10)
    return ans
    # count = {}
    # while n:
    #   d = n % 10
    #   count[d] = count[d] + 1 if d in count else 1
    #   n = int(n / 10)
    # ans = 0
    # for d in count:
    #   ans += d * count[d]
    # return ans