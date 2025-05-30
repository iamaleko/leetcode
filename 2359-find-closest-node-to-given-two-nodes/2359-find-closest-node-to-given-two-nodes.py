class Solution:
  def closestMeetingNode(self, edges: List[int], a: int, b: int) -> int:
    level, levels = 0, {}
    while a > -1:
      if a in levels:
        break
      levels[a] = level
      a = edges[a]
      level += 1
    level = 0
    visited = set()
    ans, best = -1, inf
    while b > -1:
      if b in visited:
        break
      visited.add(b)
      if b in levels:
        score = max(levels[b], level)
        if best > score or best == score and ans > b:
          ans = b
          best = score
      b = edges[b]
      level += 1
    return ans