class Solution:
  def minOperations(self, boxes: str) -> List[int]:
    n = len(boxes)
    ls, lc, rs, rc = 0, 0, 0, 0
    for i in range(n):
      if boxes[i] == '1':
        rs += i
        rc += 1
    ans = [0] * n
    for i in range(n):
      if boxes[i] == '1':
        lc += 1
        rc -= 1
      ans[i] = ls + rs
      ls += lc
      rs -= rc
    return ans
        