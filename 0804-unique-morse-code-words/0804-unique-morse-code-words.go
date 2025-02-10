func uniqueMorseRepresentations(words []string) int {
	codes := []string{".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."}
	ans := 0
	set := map[string]bool{}
  s := []string{}
	for _, word := range words {
		for _, rn := range []rune(word) {
			s = append(s, codes[rn-'a'])
		}
		key := strings.Join(s, "")
		if !set[key] {
			ans++
			set[key] = true
		}
    s = s[:0]
	}
	return ans
}