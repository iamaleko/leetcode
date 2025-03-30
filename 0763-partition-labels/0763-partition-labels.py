class Solution:
  def partitionLabels(self, s: str) -> List[int]:
    last = defaultdict(int)
    for i, ch in enumerate(s):
      last[ch] = i
    l, r = 0, 0
    ans = []
    for i, ch in enumerate(s):
      if last[ch] > r:
        r = last[ch]
      if r == i:
        ans.append(r - l + 1)
        l = i + 1
        r = i + 1
    return ans