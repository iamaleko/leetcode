class Solution:
  def findThePrefixCommonArray(self, a: List[int], b: List[int]) -> List[int]:
    s, ans = set(), 0
    for i in range(len(a)):
      if a[i] in s:
        ans += 1
      else:
        s.add(a[i])
      if b[i] in s:
        ans += 1
      else:
        s.add(b[i])
      a[i] = ans
    return a
        