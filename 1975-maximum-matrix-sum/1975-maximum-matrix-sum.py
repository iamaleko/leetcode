class Solution:
  def maxMatrixSum(self, m: List[List[int]]) -> int:
    sum_total = 0
    neg_count = 0
    min_value = math.inf
    for y in range(len(m)):
      for x in range(len(m[0])):
        if m[y][x] < 0:
          neg_count ^= 1
        if abs(m[y][x]) < min_value:
          min_value = abs(m[y][x])
        sum_total += abs(m[y][x])
    if neg_count:
      sum_total -= min_value * 2
    return sum_total