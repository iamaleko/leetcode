func findWordsContaining(words []string, x byte) []int {
  ans := []int{}
  t := rune(x)
  for i, word := range words {
    for _, r := range word {
      if r == t {
        ans = append(ans, i)
        break
      }
    }
  }
  return ans
}