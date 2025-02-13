func largeGroupPositions(s string) [][]int {
	ans := [][]int{}
	last, from := '0', 0
  s += string('0')
	for to, rn := range s {
		if rn != last {
			if to-from >= 3 {
				ans = append(ans, []int{from, to - 1})
			}
			last, from = rn, to
		}
	}
	return ans
}