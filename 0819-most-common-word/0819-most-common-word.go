func mostCommonWord(paragraph string, banned []string) string {
  ans, maxCount := "", 0
  bannedSet := map[string]bool{}
  wordRunes := []rune{}
  wordCount := map[string]int{}

  for _, word := range banned {
    bannedSet[word] = true
  }
  paragraph += string(0)
  for _, rn := range []rune(paragraph) {
    if rn >= 'A' && rn <= 'Z' {
      rn += 'a' - 'A'
    }
    if rn >= 'a' && rn <= 'z' {
      wordRunes = append(wordRunes, rn)
    } else if len(wordRunes) > 0 {
      word := string(wordRunes)
      wordRunes = wordRunes[:0]
      if !bannedSet[word] {
        wordCount[word]++
        if wordCount[word] > maxCount {
          ans, maxCount = word, wordCount[word]
        }
      }
    }
  }
  return ans
}