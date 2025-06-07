class Solution:
  def answerString(self, word: str, numFriends: int) -> str:
    if numFriends == 1:
      return word
    ans = ''
    m, n = max(word), len(word) - numFriends + 1
    for l in range(len(word)):
      if word[l] == m:
        ans = max(ans, word[l: l + n])
    return ans
    