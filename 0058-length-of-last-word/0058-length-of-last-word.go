func lengthOfLastWord(s string) int {
  st := strings.Split(strings.Trim(s, " "), " ")
  return len(st[len(st)-1])
}