func longestValidParentheses(s string) int {
  stack := []rune{}
  index := []int{}
  intervals := [][2]int{}
  for i, rn := range []rune(s) {
    if rn == '(' {
      stack = append(stack, rn)
      index = append(index, i)
    } else if len(stack) > 0 && stack[len(stack)-1] == '(' {
      stack = stack[:len(stack)-1]
      j := index[len(index)-1]
      index = index[:len(index)-1]
      for len(intervals) > 0 && intervals[len(intervals)-1][0] > j {
        intervals = intervals[:len(intervals)-1]
      }
      if len(intervals) > 0 && intervals[len(intervals)-1][1] == j - 1 {
        intervals[len(intervals)-1][1] = i
      } else {
        intervals = append(intervals, [2]int{ j, i })
      }
    }
  }
  ans := 0
  for _, interval := range intervals {
    ans = max(ans, interval[1] - interval[0] + 1)
  }
  return ans
}