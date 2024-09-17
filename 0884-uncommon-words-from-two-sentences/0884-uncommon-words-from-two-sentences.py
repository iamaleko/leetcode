from collections import defaultdict

class Solution:
  def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
    words = (s1 + ' ' + s2).split()
    m = defaultdict(int)
    for word in words:
      m[word] += 1
    ans = []
    for word in m:
      if m[word] == 1:
        ans.append(word)
    return ans