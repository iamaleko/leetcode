class Solution:
  def countPrefixSuffixPairs(self, words: List[str]) -> int:
    ans, n = 0, len(words)
    for i in range(n):
      # l = len(words[i])
      for j in range(i + 1, n):
        # if words[j][:l] == words[i] and words[j][-l:] == words[i]:
        if words[j].startswith(words[i]) and words[j].endswith(words[i]):
          ans += 1
    return ans
        