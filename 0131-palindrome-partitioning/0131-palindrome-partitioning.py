class Solution:
  def partition(self, s: str) -> List[List[str]]:
    s = list(s)
    ans = []

    v = set([tuple(s)])
    q = deque([s])

    while q:
      s = q.popleft()
      ans.append(s)

      for i in range(len(s) - 1):
        if s[i] == s[i + 1]:
          ss = s[:i] + [s[i] + s[i + 1]] + s[i + 2:]
          if tuple(ss) not in v:
            v.add(tuple(ss))
            q.append(ss)

      for i in range(1, len(s) - 1):
        if s[i - 1] == s[i + 1]:
          ss = s[:i - 1] + [s[i - 1] + s[i] + s[i + 1]] + s[i + 2:]
          if tuple(ss) not in v:
            v.add(tuple(ss))
            q.append(ss)
      
    return ans
        