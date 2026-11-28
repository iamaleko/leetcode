class Solution:
  def checkGoodInteger(self, n: int) -> bool:
    digitSum = 0
    squareSum = 0
    while n:
      d = n % 10
      digitSum += d
      squareSum += d * d
      n = int(n / 10)
    return squareSum - digitSum >= 50
        