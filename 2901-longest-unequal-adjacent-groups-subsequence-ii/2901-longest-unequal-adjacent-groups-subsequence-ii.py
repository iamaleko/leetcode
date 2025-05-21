class Solution:
  def getWordsInLongestSubsequence(self, words: List[str], groups: List[int]) -> List[str]:
    ans = []
    m = dict()
    for i, word in enumerate(words):
      # find best chain
      best = []
      for j in range(len(word)):
        key = word[0:j] + '.' + word[j+1:]
        if key in m and groups[i] != groups[m[key][-1]] and len(m[key]) > len(best):
          best = m[key]
      best = best[:] + [i]
      # update chains
      for j in range(len(word)):
        key = word[0:j] + '.' + word[j+1:]
        if key not in m or len(m[key]) < len(best):
          m[key] = best
      # update ans
      if len(best) > len(ans):
        ans = best
    return list(map(lambda i: words[i], ans))
        