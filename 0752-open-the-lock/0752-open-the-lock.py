class Solution:
  def openLock(self, deadends: List[str], target: str) -> int:
    target = tuple([int(d) for d in target])

    dp = {}
    for deadend in deadends:
      dp[tuple([int(d) for d in deadend])] = -1

    queue = deque([(0,0,0,0,0)])
    while queue:
      a,b,c,d,step = queue.popleft()
      if (a,b,c,d) == target:
        return step
      if (a,b,c,d) not in dp:
        dp[(a,b,c,d)] = step
        step += 1
        queue.append((abs((a + 1) % 10), b, c, d, step))
        queue.append((abs((a - 1) % 10), b, c, d, step))
        queue.append((a, abs((b + 1) % 10), c, d, step))
        queue.append((a, abs((b - 1) % 10), c, d, step))
        queue.append((a, b, abs((c + 1) % 10), d, step))
        queue.append((a, b, abs((c - 1) % 10), d, step))
        queue.append((a, b, c, abs((d + 1) % 10), step))
        queue.append((a, b, c, abs((d - 1) % 10), step))
    
    return -1