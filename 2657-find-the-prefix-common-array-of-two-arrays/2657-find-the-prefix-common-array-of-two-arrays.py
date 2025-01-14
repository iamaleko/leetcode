class Solution:
  def findThePrefixCommonArray(self, a: List[int], b: List[int]) -> List[int]:
    m = {}
    ans = 0
    for i in range(len(a)):
      if a[i] in m: ans += 1
      m[a[i]] = True
      if b[i] in m: ans += 1
      m[b[i]] = True
      a[i] = ans
    return a
        