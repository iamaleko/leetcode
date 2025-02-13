func maximumSum(nums []int) int {
	m, ans := map[int]int{}, -1
	for _, num := range nums {
		s, n := 0, num
		for n > 0 {
			s += n % 10
			n /= 10
		}
		if app, ok := m[s]; ok {
			if ans < num+app {
				ans = num + app
			}
			if app < num {
				m[s] = num
			}
		} else {
			m[s] = num
		}
	}
	return ans
}