func numberOfLines(widths []int, s string) []int {
	width := 0
	line := 1
	for _, rn := range []rune(s) {
		width += widths[rn-'a']
		if width > 100 {
			line++
			width = widths[rn-'a']
		}
	}
	return []int{line, width}
}