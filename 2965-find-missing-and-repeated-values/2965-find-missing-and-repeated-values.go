func findMissingAndRepeatedValues(grid [][]int) []int {
	check := make([]bool, len(grid)*len(grid))
  a, b := 0, 1
	for _, row := range grid {
		for _, num := range row {
			if check[num-1] {
				a = num
			} else {
				check[num-1] = true
        for check[b-1] {
          b++
        }
			}
		}
	}
	return []int{a, b}
}