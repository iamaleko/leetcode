func shortestToChar(s string, c byte) []int {
	n, bytes := len(s), []byte(s)
	ans := make([]int, n)
	l := -n
	for i, b := range bytes {
		if b == c {
			l = i
		}
		ans[i] = i - l
	}
	l = n * 2
	for i, b := range slices.Backward(bytes) {
		if b == c {
			l = i
		}
		ans[i] = min(ans[i], l-i)
	}
	return ans
}