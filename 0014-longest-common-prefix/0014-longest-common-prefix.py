class Solution:
  def longestCommonPrefix(self, strs: List[str]) -> str:
    trie = {}
    prefix = strs[0]
    for i in range(len(strs)):
      if len(strs[i]) < len(prefix):
        prefix = strs[i]
      node = trie
      for j in range(len(strs[i])):
        if strs[i][j] not in node:
          if i and len(prefix) > j:
            prefix = prefix[:j]
            break
          node[strs[i][j]] = {}
        node = node[strs[i][j]]
    return prefix

        