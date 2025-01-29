func isValid(s string) bool {
	pairs := map[rune]rune{']': '[', ')': '(', '}': '{'}
	stack := []rune{}
	for _, rn := range s {
		if pair, ok := pairs[rn]; ok {
			if len(stack) == 0 || stack[len(stack)-1] != pair {
				return false
			}
			stack = stack[:len(stack)-1]
		} else {
			stack = append(stack, rn)
		}
	}
	return len(stack) == 0
}