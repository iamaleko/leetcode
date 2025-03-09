class Solution:
  def numberOfAlternatingGroups(self, colors: List[int], k: int) -> int:
    if k > len(colors):
      return 0
    colors += colors[0:k-1]
    ans, cur = 0, 1
    for i in range(1, len(colors)):
      cur = cur + 1 if colors[i] != colors[i-1] else 1
      if cur == k:
        ans += 1
        cur -= 1
    return ans
        