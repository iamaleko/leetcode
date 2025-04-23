class Solution:
  def countLargestGroup(self, n: int) -> int:
    groups = defaultdict(int)
    for i in range(1, n+1):
      s = 0
      while i:
        s += i % 10
        i //= 10
      groups[s] += 1
    ans = 0
    size = 0
    for group in groups:
      if groups[group] > size:
        ans = 1
        size = groups[group]
      elif groups[group] == size:
        ans += 1
    return ans
        