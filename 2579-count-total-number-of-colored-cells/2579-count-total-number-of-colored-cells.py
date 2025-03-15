class Solution:
  def coloredCells(self, n: int) -> int:
    return n * (n * 2 - 2) + 1