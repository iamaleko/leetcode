import (
  "strings"
)
func uncommonFromSentences(s1 string, s2 string) []string {
  m := map[string]int{}
  arr := strings.Split(s1 + " " + s2, " ")
  for _, s := range arr {
    m[s]++;
  }
  ans := []string{}
  for word, count := range m {
    if count == 1 {
      ans = append(ans, word)
    }
  }
  return ans;
}