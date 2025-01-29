func strStr(haystack string, needle string) int {
  a := []rune(haystack)
  b := []rune(needle)
  for i := range len(a) - len(b) + 1 {
    j := len(b) - 1
    for j >= 0 && a[i+j] == b[j] {
      j--
    }
    if j < 0 {
      return i
    }
  }
  return -1
}