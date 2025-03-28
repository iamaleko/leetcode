class Solution:
  def maxCount(self, banned: List[int], n: int, maxSum: int) -> int:
    sqrt = min(n, math.floor(math.sqrt(maxSum)))
    ans = sqrt
    sqrtSum = int(sqrt * sqrt / 2 + sqrt / 2)
    accSum = sqrtSum
    s = set(banned)

    for num in s:
      if num <= sqrt:
        accSum -= num
        ans -= 1

    for num in range(sqrt + 1, n + 1):
      if accSum + num > maxSum:
        break
      if num not in s:
        accSum += num
        ans += 1
    return ans