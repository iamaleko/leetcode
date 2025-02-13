func maximumSum(nums []int) int {
	arr := [82]int{}
	ans := -1
	var s, n int
	for _, num := range nums {
		s, n = 0, num
		for n > 0 {
			s += n % 10
			n /= 10
		}
		if arr[s] != 0 && ans < num+arr[s] {
			ans = num + arr[s]
		}
		if arr[s] < num {
			arr[s] = num
		}
	}
	return ans
}