func maximumSum(nums []int) int {
  m := [82]int{}
	ans := -1
  var s, n int
	for _, num := range nums {
		s, n = 0, num
		for n > 0 {
			s += n % 10
			n /= 10
		}
    if m[s] != 0 && ans < num+m[s] {
      ans = num + m[s]
    }
    if m[s] < num {
      m[s] = num
    }
	}
	return ans
}