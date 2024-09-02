class Solution:
  def chalkReplacer(self, chalk: List[int], k: int) -> int:
    chalkSum = 0
    for val in chalk:
      chalkSum += val
    lastIterationChalkSum = k % chalkSum
    for i, val in enumerate(chalk):
      lastIterationChalkSum -= val
      if lastIterationChalkSum < 0:
        return i
    return 0
        