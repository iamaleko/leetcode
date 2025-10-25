import (
  "slices"
)
func removeAnagrams(words []string) []string {
  last := ""
  ans := []string{}
  for _, word := range words {
    bytes := []byte(word)
    slices.Sort(bytes)
    key := string(bytes)
    if last != key {
      ans = append(ans, word)
      last = key
    }
  }
  return ans
}