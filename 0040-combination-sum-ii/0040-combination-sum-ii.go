func combinationSum2(candidates []int, target int) [][]int {
	slices.Sort(candidates)
	ans := [][]int{}
	var backtrack func(i int, target int, path []int)
	backtrack = func(i int, target int, path []int) {
		if target < 0 {
			return
		} else if target == 0 {
			ans = append(ans, slices.Clone(path))
			return
		}
		for j := i; j < len(candidates); j++ {
			if j > i && candidates[j] == candidates[j-1] {
				continue
			}
      path = append(path, candidates[j])
			backtrack(j+1, target-candidates[j], path)
      path = path[:len(path)-1]
		}
	}

	backtrack(0, target, []int{})
	return ans
}