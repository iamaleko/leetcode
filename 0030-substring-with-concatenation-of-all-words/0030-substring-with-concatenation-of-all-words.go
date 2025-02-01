func findSubstring(s string, words []string) []int {
  total := len(words)
  chunk := len(words[0])
  count := map[string]int{}
  found := map[string]int{}
  ans := []int{}
  for _, word := range words {
    count[word]++
  }
  for i, m := 0, len(s) - total * chunk; i <= m; i++ {
    if count[s[i: i + chunk]] == 0 { continue }
    found = map[string]int{}
    added := 0
    for j, m := i, i + total * chunk - chunk; j <= m; j += chunk {
      word := s[j: j + chunk]
      if found[word] + 1 > count[word] { break }
      found[word]++
      added++
    }
    if added == total {
      ans = append(ans, i)
    }
  }
  return ans
}