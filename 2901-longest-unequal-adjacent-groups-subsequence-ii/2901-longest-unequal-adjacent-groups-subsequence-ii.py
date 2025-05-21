class Solution:
  def getWordsInLongestSubsequence(self, words: List[str], groups: List[int]) -> List[str]:
    ans = []
    m = dict()
    for i, word in enumerate(words):
      best, keys = [], [word[0:j] + '.' + word[j+1:] for j in range(len(word))]
      for key in keys:
        if key in m and len(m[key]) > len(best) and groups[i] != groups[m[key][-1]]:
          best = m[key]
      best = best[:] + [i]
      for key in keys:
        if key not in m or len(m[key]) < len(best):
          m[key] = best
      if len(best) > len(ans):
        ans = best
    return list(map(lambda i: words[i], ans))
        