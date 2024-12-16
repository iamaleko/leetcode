class Solution:
  def findRestaurant(self, a: List[str], b: List[str]) -> List[str]:
    d = {}
    for i, v in enumerate(a):
      if v not in d:
        d[v] = i
    ans, s = [], math.inf
    for i, v in enumerate(b):
      if v in d:
        if d[v] + i < s:
          s = d[v] + i
          ans = []
        if d[v] + i == s:
          ans.append(v)
    return ans
        