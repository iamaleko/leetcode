func largestIsland(grid [][]int) int {
	islandSizes, islandId := map[int]int{}, 2
	hasWater := false
	ans := 0
	n := len(grid)
	offsets := []*struct{ Y, X int }{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}

	// find islands
	yq, xq, p := []int{}, []int{}, -1
	for y := range n {
		for x := range n {
			if grid[y][x] == 0 {
				hasWater = true
			} else if grid[y][x] == 1 {
				islandSize := 1
				grid[y][x] = islandId
				yq, xq = append(yq, y), append(xq, x)
				p++
				for p >= 0 {
					y, x := yq[p], xq[p]
					yq, xq = yq[:p], xq[:p]
					p--
					for _, offset := range offsets {
						yo, xo := y+offset.Y, x+offset.X
						if yo > -1 && yo < n && xo > -1 && xo < n && grid[yo][xo] == 1 {
							islandSize++
							grid[yo][xo] = islandId
							yq, xq = append(yq, yo), append(xq, xo)
							p++
						}
					}
				}
				islandSizes[islandId] = islandSize
				ans = max(ans, islandSize)
				islandId += 1
			}
		}
	}

	// check connections
	if hasWater {
		ans += 1
		for y := range n {
			for x := range n {
				if grid[y][x] == 0 {
					joinedSize, addedIslandIds := 1, map[int]bool{}
					for _, offset := range offsets {
						yo, xo := y+offset.Y, x+offset.X
						if yo > -1 && yo < n && xo > -1 && xo < n && grid[yo][xo] > 0 &&
							addedIslandIds[grid[yo][xo]] == false {
							joinedSize += islandSizes[grid[yo][xo]]
							addedIslandIds[grid[yo][xo]] = true
						}
					}
					ans = max(ans, joinedSize)
				}
			}
		}
	}

	return ans
}