func clearDigits(s string) string {
  ans := []rune{}
  runes := []rune(s)
  remove := 0
  slices.Reverse(runes)
  for _, rn := range runes  {
    if unicode.IsDigit(rn) {
      remove++
    } else if remove != 0 {
      remove--
    } else {
      ans = append(ans, rn)
    }
  }
  slices.Reverse(ans)
  return string(ans)
}