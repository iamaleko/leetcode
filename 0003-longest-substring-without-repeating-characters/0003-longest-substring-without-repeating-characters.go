func lengthOfLongestSubstring(s string) int {
  ans, l := -1, 0
  chars := map[uint8]bool{}
  for r := range s {
    for chars[s[r]] {
      delete(chars, s[l])
      l += 1
    }
    chars[s[r]] = true
    ans = max(ans, r - l)
  }
  return ans + 1
}