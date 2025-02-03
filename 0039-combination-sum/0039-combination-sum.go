func combinationSum(candidates []int, target int) [][]int {
  slices.Sort(candidates)
  ans := [][]int{}
  var choose func(pos int, sum int, arr []int)
  choose = func(pos int, sum int, arr []int) {
    sum += candidates[pos]
    arr = append(arr, candidates[pos])

    if sum == target {
      ans = append(ans, arr)
    } else {
      for pos < len(candidates) && candidates[pos] <= target - sum {
        choose(pos, sum, slices.Clone(arr))
        pos++
      }
    }
  }
  for pos := range len(candidates) {
    choose(pos, 0, []int{})
  }
  return ans
}