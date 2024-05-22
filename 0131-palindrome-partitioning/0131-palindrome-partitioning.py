class Solution:
  def partition(self, s: str) -> List[List[str]]:
    s = list(s)
    ans = [s]

    v = set([tuple(s)])
    q = deque([s])

    while q:
      s = q.popleft()

      for i in range(len(s) - 1):
        if s[i] == s[i + 1]:
          ss = s[:i] + [s[i] + s[i + 1]] + s[i + 2:]
          if tuple(ss) not in v:
            v.add(tuple(ss))
            q.append(ss)
            ans.append(ss)
        if i and s[i - 1] == s[i + 1]:
          ss = s[:i - 1] + [s[i - 1] + s[i] + s[i + 1]] + s[i + 2:]
          if tuple(ss) not in v:
            v.add(tuple(ss))
            q.append(ss)
            ans.append(ss)
      
    return ans
        