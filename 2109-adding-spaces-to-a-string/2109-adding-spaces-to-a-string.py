class Solution:
  def addSpaces(self, s: str, spaces: List[int]) -> str:
    if not spaces:
      return s
    ans, offset, p, l = [], 0, 0, 0
    for r in range(len(s)):
      if r + offset == spaces[p]:
        ans.append(s[l:r])
        l = r
        p += 1
        if p == len(spaces):
          break
    if l < len(s):
      ans.append(s[l:])
    return ' '.join(ans)
        