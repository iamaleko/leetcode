func strStr(haystack string, needle string) int {
  r := len(needle)
  for l := range len(haystack) - r + 1 {
    if haystack[l:l + r] == needle {
      return l
    }
  }
  return -1   
}