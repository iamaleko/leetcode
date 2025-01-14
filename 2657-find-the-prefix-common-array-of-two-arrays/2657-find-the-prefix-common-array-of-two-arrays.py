class Solution:
  def findThePrefixCommonArray(self, a: List[int], b: List[int]) -> List[int]:
    s, ans = [0] * 51, 0
    for i in range(len(a)):
      if s[a[i]]:
        ans += 1
      else:
        s[a[i]] = 1
      if s[b[i]]:
        ans += 1
      else:
        s[b[i]] = 1
      a[i] = ans
    return a
        