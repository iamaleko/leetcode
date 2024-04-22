class Solution:
  def openLock(self, deadends: List[str], target: str) -> int:
    dp = {}
    for deadend in deadends:
      dp[tuple([int(d) for d in deadend])] = -1

    queue = deque([(0,0,0,0,0)])

    while queue:
      a,b,c,d,step = queue.popleft()
      
      key = (a,b,c,d)
      if key in dp:
        continue
      dp[key] = step

      step += 1
      queue.append((abs((a + 1) % 10), b, c, d, step))
      queue.append((abs((a - 1) % 10), b, c, d, step))
      queue.append((a, abs((b + 1) % 10), c, d, step))
      queue.append((a, abs((b - 1) % 10), c, d, step))
      queue.append((a, b, abs((c + 1) % 10), d, step))
      queue.append((a, b, abs((c - 1) % 10), d, step))
      queue.append((a, b, c, abs((d + 1) % 10), step))
      queue.append((a, b, c, abs((d - 1) % 10), step))
    
    target = tuple([int(d) for d in target])
    return dp[target] if target in dp else -1