class Solution:
  def maxCount(self, banned: List[int], n: int, maxSum: int) -> int:
    sqrt = min(n, math.floor(math.sqrt(maxSum)))
    ans = sqrt
    sqrtSum = int(sqrt * sqrt / 2 + sqrt / 2)
    accSum = sqrtSum
    i = sqrt + 1
    s = set(banned)
    # print('<', accSum, ans, i)
    for num in s:
      if num <= sqrt:
        accSum -= num
        ans -= 1
    # print('>', accSum, ans, i)
    while i <= n:
      if i not in s:
        if accSum + i > maxSum:
          break
        accSum += i
        # print('+', accSum, i)
        ans += 1
      i += 1
    return ans