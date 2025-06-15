class Solution:
  def maxDiff(self, num: int) -> int:
    if len(set(str(num))) == 1:
      return int('8' * len(str(num)))
    x, y, arr = -1, -1, list(map(int, str(num)))
    for d in arr:
      if x == -1 and d > 1: x = d
      if y == -1 and d < 9: y = d
      if x != -1 and y != -1: break
    a, b, r = 0, 0, 1 if arr[0] == x else 0
    for d in arr:
      a = a * 10 + (r if d == x else d)
      b = b * 10 + (9 if d == y else d)
    return b - a
    

        