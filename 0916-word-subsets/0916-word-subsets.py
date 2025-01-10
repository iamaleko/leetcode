class Solution:
  def wordSubsets(self, words1: List[str], words2: List[str]) -> List[str]:
    superset = [0] * 26
    for word in words2:
      subset = [0] * 26
      for ch in word:
        subset[ord(ch) - 97] += 1
      for i in range(26):
        superset[i] = max(superset[i], subset[i])
    ans = []
    for word in words1:
      subset = [0] * 26
      for ch in word:
        subset[ord(ch) - 97] += 1
      for i in range(26):
        if subset[i] < superset[i]:
          break
      else:
        ans.append(word)
    return ans

        