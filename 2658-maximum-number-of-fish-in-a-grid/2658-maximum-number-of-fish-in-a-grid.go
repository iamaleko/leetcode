func findMaxFish(grid [][]int) int {
	ans := 0
	my, mx := len(grid)-1, len((grid)[0])-1
	for y := range grid {
		for x := range grid[y] {
			if grid[y][x] != 0 {
				sum, p := 0, 0
        yst, xst := []int{y}, []int{x}
				for len(xst) > 0 {
					y, x := yst[p], xst[p]
          yst, xst = yst[:p], xst[:p]
					p--
					sum += grid[y][x]
					grid[y][x] = 0
					if y > 0 && grid[y-1][x] > 0 { yst, xst = append(yst, y-1), append(xst, x); p++ }
					if y < my && grid[y+1][x] > 0 { yst, xst = append(yst, y+1), append(xst, x); p++ }
					if x > 0 && grid[y][x-1] > 0 { yst, xst = append(yst, y), append(xst, x-1); p++ }
					if x < mx && grid[y][x+1] > 0 { yst, xst = append(yst, y), append(xst, x+1); p++ }
				}
				ans = max(ans, sum)
			}
		}
	}
	return ans
}