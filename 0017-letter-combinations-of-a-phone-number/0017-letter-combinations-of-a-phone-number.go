func letterCombinations(digits string) []string {
	ans := []string{}
	if len(digits) > 0 {
		dict := []string{"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"}
		runes := []rune(digits)
		var build func(prefix string, i int)
		build = func(prefix string, i int) {
			for _, rn := range dict[runes[i]-'0'] {
				if i > 0 {
					build(string(rn)+prefix, i-1)
				} else {
					ans = append(ans, string(rn)+prefix)
				}
			}
		}
		build("", len(digits)-1)
	}
	return ans
}