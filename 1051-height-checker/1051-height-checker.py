# O(n log n) with sorting
# class Solution:
#   def heightChecker(self, heights: List[int]) -> int:
#     expected = heights[:]
#     expected.sort()
#     cnt = 0
#     for i in range(len(heights)):
#       if expected[i] != heights[i]:
#         cnt += 1
#     return cnt

# O(n) with bucket sort
class Solution:
  def heightChecker(self, heights: List[int]) -> int:
    expected = [0] * 101
    for heigh in heights:
      expected[heigh] += 1
    cnt = 0
    i = 0
    for j in range(101):
      for _ in range(expected[j]):
        if j != heights[i]:
          cnt += 1
        i += 1
    return cnt


        