class Solution:
  def findChampion(self, grid: List[List[int]]) -> int:
    max_i = -1
    max_val = -1
    for i, val in enumerate(grid):
      val = sum(val)
      if val > max_val:
        max_val = val
        max_i = i
    return max_i