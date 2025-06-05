class Solution:
  def smallestEquivalentString(self, a: str, b: str, s: str) -> str:
    parent = {}
    for l, r in zip(a, b):
      if l not in parent:
        parent[l] = l
      if r not in parent:
        parent[r] = r
      while parent[l] != l:
        l = parent[parent[l]]
      while parent[r] != r:
        r = parent[parent[r]]
      if l < r:
        parent[r] = l
      else:
        parent[l] = r
    # print(parent)
    ans = []
    for k in s:
      if k in parent:
        while parent[k] != k:
          k = parent[parent[k]]
      ans.append(k)
    return ''.join(ans)

        