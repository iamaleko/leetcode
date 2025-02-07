func queryResults(limit int, queries [][]int) []int {
	colors, colored := map[int]int{}, map[int]int{}
	ans := make([]int, len(queries))
	var distinct, ball, newColor int

	for i, query := range queries {
		ball, newColor = query[0], query[1]
		if oldColor, ok := colored[ball]; ok {
			colors[oldColor]--
			if colors[oldColor] == 0 {
				distinct--
			}
		}
		colored[ball] = newColor
		colors[newColor]++
		if colors[newColor] == 1 {
			distinct++
		}
		ans[i] = distinct
	}

	return ans
}