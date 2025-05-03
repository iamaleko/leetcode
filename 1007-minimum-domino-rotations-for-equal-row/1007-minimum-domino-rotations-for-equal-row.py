class Solution:
  def minDominoRotations(self, t: List[int], b: List[int]) -> int:
    ans = 0
    for i in range(1, len(t)):
      if b[i]!= t[i] and b[0] != t[0] and (t[0] == b[i] or b[0] == t[i]):
        ans += 1
        b[i],t[i] = t[i],b[i]
      if t[0] == t[i]:
        if b[0] != b[i]:
          b[0] = -1
      if b[0] == b[i]:
        if t[0] != t[i]:
          t[0] = -1
      if t[0] != t[i] and b[0] != b[i] or t[0] == -1 and b[0] == -1:
        return -1
    return ans
        