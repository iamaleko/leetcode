class Solution:
  def openLock(self, deadends: List[str], target: str) -> int:
    dp = {}
    for end in deadends:
      dp[end] = -1

    queue = deque([(0,0,0,0,0)])

    while queue:
      a,b,c,d,step = queue.popleft()
      
      key = str(a) + str(b) + str(c) + str(d)
      if key in dp and dp[key] <= step:
        continue
      dp[key] = step

      if a < 9: queue.append((a+1,b,c,d,step + 1))
      if b < 9: queue.append((a,b+1,c,d,step + 1))
      if c < 9: queue.append((a,b,c+1,d,step + 1))
      if d < 9: queue.append((a,b,c,d+1,step + 1))
      if a > 0: queue.append((a-1,b,c,d,step + 1))
      if b > 0: queue.append((a,b-1,c,d,step + 1))
      if c > 0: queue.append((a,b,c-1,d,step + 1))
      if d > 0: queue.append((a,b,c,d-1,step + 1))
      if a == 9: queue.append((0,b,c,d,step + 1))
      if b == 9: queue.append((a,0,c,d,step + 1))
      if c == 9: queue.append((a,b,0,d,step + 1))
      if d == 9: queue.append((a,b,c,0,step + 1))
      if a == 0: queue.append((9,b,c,d,step + 1))
      if b == 0: queue.append((a,9,c,d,step + 1))
      if c == 0: queue.append((a,b,9,d,step + 1))
      if d == 0: queue.append((a,b,c,9,step + 1))
      
    return dp[target] if target in dp else -1