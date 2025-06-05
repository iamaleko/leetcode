class Solution:
  def smallestEquivalentString(self, a: str, b: str, s: str) -> str:
    parent, ans = {}, ''
    for l, r in zip(a, b):
      if l in parent:
        while parent[l] != l:
          l = parent[parent[l]]
      else:
        parent[l] = l
      if r in parent:
        while parent[r] != r:
          r = parent[parent[r]]
      else:
        parent[r] = r
      if l > r:
        l, r = r, l
      parent[r] = l
    for k in s:
      if k in parent:
        while parent[k] != k:
          k = parent[parent[k]]
      ans += k
    return ans

        