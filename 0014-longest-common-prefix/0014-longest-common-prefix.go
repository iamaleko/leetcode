func longestCommonPrefix(strs []string) string {
  prefix := ""
  for j := 0; j < len(strs[0]); j++ {
    for i := 1; i < len(strs); i++ {
      if j == len(strs[i]) || strs[i][j] != strs[0][j] {
        return prefix
      }
    }
    prefix += string(strs[0][j])
  }
  return prefix
}