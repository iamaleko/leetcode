func getLongestSubsequence(words []string, groups []int) []string {
  ans := []string{}
  group := -1
  for i := range len(groups) {
    if groups[i] != group {
      ans = append(ans, words[i])
      group = groups[i]
    }
  }
  return ans
}