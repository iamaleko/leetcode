class Solution:
  def numberOfAlternatingGroups(self, colors: List[int], k: int) -> int:
    ans, cur = 0, 1
    n = len(colors)
    for i in range(1, n + k - 1):
      cur = cur + 1 if colors[i % n] != colors[(i - 1) % n] else 1
      if cur == k:
        ans += 1
        cur -= 1
    return ans
        