class Solution:
  def countPrefixSuffixPairs(self, words: List[str]) -> int:
    ans = 0
    for i in range(len(words)):
      l = len(words[i])
      for j in range(i + 1, len(words)):
        # if words[j][:l] == words[i] and words[j][-l:] == words[i]:
        if words[j].startswith(words[i]) and words[j].endswith(words[i]):
          ans += 1
    return ans
        