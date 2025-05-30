class Solution:
  def closestMeetingNode(self, edges: List[int], a: int, b: int) -> int:
    level, levels = 0, {}
    while a > -1:
      if a in levels: break
      levels[a] = level
      a = edges[a]
      level += 1
    level, best, ans = 0, inf, -1
    while b > -1:
      if b in levels:
        if levels[b] == -1: break
        if best > (score := max(levels[b], level)) or best == score and ans > b:
          ans, best = b, score
      levels[b] = -1
      b = edges[b]
      level += 1
    return ans