func isPalindrome(s string) bool {
  runeSlice := []rune(strings.ToLower(s))
  l := 0
  r := len(s) - 1
  runeMap := map[rune]int{
    'a': 1, 'b': 1, 'c': 1, 'd': 1, 'e': 1, 'f': 1, 'g': 1, 'h': 1, 'i': 1, 'j': 1, 'k': 1,
    'l': 1, 'm': 1, 'n': 1, 'o': 1, 'p': 1, 'q': 1, 'r': 1, 's': 1, 't': 1, 'u': 1, 'v': 1,
    'w': 1, 'x': 1, 'y': 1, 'z': 1, '0': 1, '1': 1, '2': 2, '3': 1, '4': 1, '5': 1, '6': 1,
    '7': 1, '8': 1, '9': 1 }
  for l < r {
    if runeMap[runeSlice[l]] == 0 {
      l++
    } else if runeMap[runeSlice[r]] == 0 {
      r--
    } else if runeSlice[l] == runeSlice[r] {
      l++
      r--
    } else {
      return false
    }
  }
  return true
}